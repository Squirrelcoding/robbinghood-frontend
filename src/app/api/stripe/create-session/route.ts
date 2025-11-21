import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    // Dynamically derive origin from request headers for robust redirect URLs
    let origin = '';
    if (req.headers) {
      const referer = req.headers.get('referer');
      if (referer) {
        try {
          const url = new URL(referer);
          origin = url.origin;
        } catch {}
      }
    }
    if (!origin) {
      origin = process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_VERCEL_URL || '';
      if (origin && !origin.startsWith('http')) origin = `https://${origin}`;
    }
    if (!amount || amount <= 0) {
      return NextResponse.json({ ok: false, error: 'Invalid amount' }, { status: 400 });
    }

    const unit_amount = Math.round(Number(amount) * 100); // cents

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Wallet deposit' },
            unit_amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/(admin)/(others-pages)/profile?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/(admin)/(others-pages)/profile`,
    });

    return NextResponse.json({ ok: true, url: session.url });
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not create session' }, { status: 500 });
  }
}
