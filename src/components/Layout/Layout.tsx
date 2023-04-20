import * as React from 'react';

import LayoutNavigation from './LayoutNavigation';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-row items-stretch bg-neutral-50">
      <LayoutNavigation />

      <main
        role="main"
        className="relative ml-nav-medium flex h-full min-h-screen w-full items-center justify-center overflow-x-hidden"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
