import * as React from 'react';
import Link from 'next/link';

import { InstagramLogo, HomeLineSvg, HomeFillSvg, MessengerLineSvg, MessengerFillSvg } from '@/assets/svg';

import { useRouter } from 'next/router';
import classNames from 'classnames';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: <HomeLineSvg />, activeIcon: <HomeFillSvg /> },
  { href: '/direct', label: 'Messages', icon: <MessengerLineSvg />, activeIcon: <MessengerFillSvg /> },
];

interface ISideNavProps {}

const SideNav: React.FunctionComponent<ISideNavProps> = (props) => {
  const router = useRouter();

  return (
    <div className=" fixed flex h-screen w-nav-medium flex-col border-r border-neutral-200 bg-white py-2 px-3">
      <div className="px-3 pt-6 pb-4">
        <Link href="/">
          <InstagramLogo className="mt-2" />
        </Link>
      </div>
      <nav>
        <ul className="flex flex-col">
          {NAV_LINKS.map((link, index) => {
            const isActive = router.pathname === link.href;

            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className="group my-0.5 flex flex-row items-center gap-4 rounded-3xl p-3 transition hover:bg-neutral-50 active:opacity-50"
                >
                  <div className="h-6 w-6 transform transition group-hover:scale-105 group-active:scale-95">
                    {isActive ? link.activeIcon : link.icon}
                  </div>
                  <div className={classNames({ 'font-bold': isActive })}>{link.label}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
