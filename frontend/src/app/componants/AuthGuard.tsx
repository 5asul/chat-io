// src/components/AuthGuard.tsx
"use client";

import { useAuth } from '@/hooks/useAuth';
import { useEffect, } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user,isLoading } = useAuth();
  const router = useRouter();
  

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login'); // Redirect only after initialization is complete
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (!user) {
    return null; // Prevents mismatched HTML
  }

  return <>{children}</>;
}
