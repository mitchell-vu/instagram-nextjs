import * as React from 'react';

import SideNav from './SideNav';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <main className="fixed h-screen w-screen bg-neutral-50">
      <div className="relative flex h-screen w-screen flex-row items-stretch bg-neutral-50">
        <SideNav />

        <div className="ml-60 flex h-full w-full items-center justify-center p-5">{children}</div>
        <div></div>
      </div>
    </main>
  );
};

export default Layout;
