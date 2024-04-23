"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return<></>;
};

export default Page;