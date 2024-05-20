"use client"; 

import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <nav>
      <Link href="/en">English</Link>
      <Link href="/tr">Turkish</Link>
    </nav>
    <main>{children}</main>
  </div>
);

export default Layout;
