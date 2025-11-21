"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

type WalletContextType = {
  balance: number;
  deposit: (amount: number) => Promise<number>;
  credit: (amount: number) => void;
  reset: () => void;
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

const STORAGE_KEY = 'wallet_balance';

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setBalance(Number(raw) || 0);
    } catch {
      // ignore (SSR or unavailable)
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(balance));
    } catch {
      // ignore
    }
  }, [balance]);

  const deposit = async (amount: number) => {
    // Optionally call server endpoint to process the deposit.
    try {
      await fetch('/api/deposit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
    } catch {
      // ignore network errors for this demo; we still update client-side
    }

    setBalance((b) => {
      const next = Math.round((b + amount) * 100) / 100;
      return next;
    });
    return balance + amount;
  };

  const credit = (amount: number) => {
    setBalance((b) => Math.round((b + amount) * 100) / 100);
  };

  const reset = () => setBalance(0);

  return (
    <WalletContext.Provider value={{ balance, deposit, credit, reset }}>
      {children}
    </WalletContext.Provider>
  );
};

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be used within WalletProvider');
  return ctx;
}

export default WalletContext;
