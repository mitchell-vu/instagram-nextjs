import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { signOut } from 'firebase/auth';
import classNames from 'classnames';

import {
  InstagramLogo,
  HomeLineSvg,
  HomeFillSvg,
  MessengerLineSvg,
  MessengerFillSvg,
  HamburgerSvg,
  HamburgerFillSvg,
} from '@/assets/svg';
import SideNavLink from './SideNavLink';
import { auth } from '@/config/firebase';

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: <HomeLineSvg />, activeIcon: <HomeFillSvg /> },
  { href: '/direct', label: 'Messages', icon: <MessengerLineSvg />, activeIcon: <MessengerFillSvg /> },
];

interface ISideNavProps {}

const SideNav: React.FC<ISideNavProps> = () => {
  const router = useRouter();

  return (
    <div className="fixed flex h-screen w-nav-medium flex-col border-r border-neutral-200 bg-white px-3 pb-5 pt-2">
      <div className="mb-5 px-3 pb-4 pt-6">
        <Link href="/" className="active:opacity-50">
          <InstagramLogo className="mt-2" />
        </Link>
      </div>

      <nav className="grow">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <SideNavLink link={link} isActive={router.pathname === link.href} />
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="group relative my-0.5 flex w-full flex-row items-center gap-4 rounded-3xl p-3 outline-none transition hover:bg-neutral-50 active:opacity-50">
                <div className="h-6 w-6 transform transition group-hover:scale-105 group-active:scale-95">
                  {open ? <HamburgerFillSvg /> : <HamburgerSvg />}
                </div>
                <div className={classNames({ 'font-bold': open })}>More</div>
              </Popover.Button>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute bottom-16 z-50 transform">
                  <div className="w-60 overflow-hidden rounded bg-white drop-shadow-md">
                    <button onClick={() => signOut(auth)} className="px-4 py-3">
                      Log out
                    </button>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default SideNav;
