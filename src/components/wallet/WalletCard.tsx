"use client";
import React, { useState } from 'react';
import DepositForm from './DepositForm';
import { useWallet } from '@/context/WalletContext';

export default function WalletCard() {
  const { balance } = useWallet();
  const [open, setOpen] = useState(false);

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
