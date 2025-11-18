"use client";
import React, { useState } from 'react';
import { useWallet } from '@/context/WalletContext';

export default function DepositForm({ onClose }: { onClose: () => void }) {
  const { deposit } = useWallet();
  const [amount, setAmount] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const val = Number(amount);
    if (!val || val <= 0) {
      setError('Enter a valid amount');
      return;
    }
    setLoading(true);
    try {
      await deposit(val);
      setAmount('');
      onClose();
    } catch {
      setError('Failed to deposit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="p-4">
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Amount</label>
        <input
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm p-2"
          placeholder="e.g. 25.00"
        />
      </div>

      {error && <div className="text-sm text-red-600 mb-2">{error}</div>}

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-3 py-2 rounded bg-gray-100 text-sm"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-3 py-2 rounded bg-blue-600 text-white text-sm"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Deposit'}
        </button>
      </div>
    </form>
  );
}
