"use client";
import React, { useEffect, useState } from 'react';
import DepositForm from './DepositForm';
import { useWallet } from '@/context/WalletContext';

export default function WalletCard() {
  const { balance, credit } = useWallet();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // After returning from Stripe Checkout, Stripe redirects with ?session_id=...
    // If present, fetch session details and credit the wallet locally.
    try {
      const params = new URLSearchParams(window.location.search);
      const session_id = params.get('session_id');
      if (!session_id) return;

      (async () => {
        try {
          const res = await fetch(`/api/stripe/session?session_id=${session_id}`);
          const body = await res.json();
          if (res.ok && body?.session?.amount_total) {
            const cents = Number(body.session.amount_total || 0);
            const dollars = cents / 100;
            credit(dollars);
          }
        } finally {
          // remove session_id from URL to avoid double-processing
          params.delete('session_id');
          const newSearch = params.toString();
          const newUrl = window.location.pathname + (newSearch ? `?${newSearch}` : '');
          window.history.replaceState({}, '', newUrl);
        }
      })();
    } catch {
      // ignore
    }
  }, [credit]);

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-white rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Wallet balance</div>
          <div className="text-2xl font-semibold">${balance.toFixed(2)}</div>
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Deposit
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 border-t pt-4">
          <DepositForm onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
