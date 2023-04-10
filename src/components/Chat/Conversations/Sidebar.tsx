import React from 'react';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex h-full w-[350px] flex-col overflow-hidden border-r border-neutral-200">
      <header className="flex h-14 flex-row items-center justify-between border-b border-neutral-200 px-5">
        <div className="basis-8"></div>
        <button className="flex basis-0 flex-row items-center gap-2">
          <div className="font-semibold">mit.chell.vu</div>
          <i className="fa-light fa-chevron-down text-lg"></i>
        </button>
        <div className="flex-end ml-2 flex basis-8">
          <i className="fa-light fa-pen-to-square text-2xl"></i>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto pt-2">
          {[...new Array(16)].map((_, i) => (
            <div
              key={i}
              role="button"
              data-opended={i === 0}
              className="flex flex-row items-center gap-3 px-5 py-2 hover:bg-neutral-100 data-[opended=true]:bg-neutral-100"
            >
              <div className="h-14 w-14 rounded-full bg-black"></div>
              <div className="flex flex-col text-sm">
                <div>mit.chell.vu</div>
                <div className="flex flex-row items-center gap-1 text-neutral-400 ">
                  <span>{`:)))))))))))))`}</span>
                  <span>·</span>
                  <span>1d</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
