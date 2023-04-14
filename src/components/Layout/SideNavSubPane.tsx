import * as React from 'react';

interface ISideNavSubPaneProps {
  title: string;
  children: React.ReactNode;
}

const SideNavSubPane: React.FC<ISideNavSubPaneProps> = ({ title, children }) => {
  return (
    <div className="absolute left-nav-narrow top-0">
      <div className="sidenav-subpane z-10 flex h-screen w-[397px] flex-col overflow-y-auto overscroll-contain rounded-ee-2xl rounded-se-2xl border-r border-r-gray-300 bg-white pt-2">
        <div className="p-6 pt-4">
          <span className="text-2xl font-bold">{title}</span>
        </div>
        <div className="flex flex-col gap-2 p-6">{children}</div>
      </div>
    </div>
  );
};

export default SideNavSubPane;
