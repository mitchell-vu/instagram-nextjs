import * as React from 'react';

import SideNav from './SideNav';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="relative flex h-screen w-screen flex-row items-stretch bg-neutral-50">
      <SideNav />

      <main className="ml-nav-medium flex h-full min-h-screen w-full items-center justify-center overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
