import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const session_id = url.searchParams.get('session_id');
    if (!session_id) return NextResponse.json({ ok: false, error: 'Missing session_id' }, { status: 400 });

    const session = await stripe.checkout.sessions.retrieve(session_id);
    return NextResponse.json({ ok: true, session });
  } catch {
    return NextResponse.json({ ok: false, error: 'Could not retrieve session' }, { status: 500 });
  }
}
