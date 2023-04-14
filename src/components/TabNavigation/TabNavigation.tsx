import { BookmarkSvg, GridSvg, TaggedSvg, VideoPlaySvg } from '@/assets/svg';
import classNames from 'classnames';
// import Link from 'next/link';
import * as React from 'react';

interface ITabNavigationProps {}

const NAV = [
  { href: '/', label: 'Posts', icon: <GridSvg /> },
  { href: '/saved', label: 'Reels', icon: <VideoPlaySvg /> },
  { href: '/reels', label: 'Saved', icon: <BookmarkSvg /> },
  { href: '/tagged', label: 'Tagged', icon: <TaggedSvg /> },
];

const TabNavigation: React.FC<ITabNavigationProps> = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="border-t">
      <div className="mb-1 flex flex-row items-center justify-center">
        {NAV.map((item, index) => (
          <div
            role="button"
            // href={`/mit.chell.vu/${item.href}`}
            key={index}
            className={classNames(
              'mr-16 flex h-12 flex-row items-center justify-center gap-2 last:mr-0',
              { 'fill-gray-500 text-gray-500': index !== activeTab },
              { '-mt-[1px] border-t border-t-black fill-black text-black': index === activeTab },
            )}
            onClick={() => setActiveTab(index)}
          >
            {item.icon}
            <span className="text-xs font-semibold uppercase">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
