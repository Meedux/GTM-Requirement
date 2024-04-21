"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return <div>Redirecting to login page...</div>;
};

export default Page;