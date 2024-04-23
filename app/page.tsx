"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter();

  router.push('/login');

  return<></>;
};

export default Page;