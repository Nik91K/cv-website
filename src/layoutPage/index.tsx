import Footer from '@components/layout/Footer/index';
import React from 'react';
import ScrollToTopButton from '@components/common/Buttons/ScrollToTop';
import ResponsiveHeader from '@components/layout/Header/ResponsiveHeader';
import { Analytics } from '@vercel/analytics/react';
import { ScrollRestoration } from 'react-router-dom';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#16161a] flex min-h-screen flex-col">
      <ScrollRestoration />
      <Analytics />
      <ResponsiveHeader />
      <main className="w-full flex-1">
        <ScrollToTopButton />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
