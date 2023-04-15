import { BookmarkSvg, GridSvg, TaggedSvg, VideoPlaySvg } from '@/assets/svg';
import classNames from 'classnames';
// import Link from 'next/link';
import * as React from 'react';

interface ITabNavigationProps {}

const NAV = [
  { href: '/', label: 'Posts', icon: <GridSvg width={12} height={12} /> },
  { href: '/saved', label: 'Reels', icon: <VideoPlaySvg width={12} height={12} /> },
  { href: '/reels', label: 'Saved', icon: <BookmarkSvg width={12} height={12} /> },
  { href: '/tagged', label: 'Tagged', icon: <TaggedSvg width={12} height={12} /> },
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
              'mr-[60px] flex h-12 flex-row items-center justify-center gap-[6px] last:mr-0 active:opacity-50',
              { 'fill-gray-500 text-gray-500': index !== activeTab },
              { '-mt-[1px] border-t border-t-black fill-black text-black': index === activeTab },
            )}
            onClick={() => setActiveTab(index)}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <span className="text-xs font-semibold uppercase tracking-[1px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
