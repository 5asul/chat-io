// src/components/AuthGuard.tsx
"use client";

import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect only after hydration
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  if (!user || isLoading) return null; // Prevents mismatched HTML

  return <>{children}</>;
}
