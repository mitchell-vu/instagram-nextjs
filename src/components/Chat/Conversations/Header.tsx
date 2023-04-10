import * as React from 'react';
import { InfoSvg } from '@/assets/svg';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="h-14 border-b border-neutral-200 px-5">
      <div className="flex h-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-black"></div>
          <div className="font-semibold">Mitchell Vu</div>
        </div>
        <button className="p-2">
          <InfoSvg aria-label="View Thread Details" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
