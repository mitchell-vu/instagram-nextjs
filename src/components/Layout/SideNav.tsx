import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  HamburgerFillSvg,
  HamburgerSvg,
  HeartFillSvg,
  HeartSvg,
  HomeFillSvg,
  HomeLineSvg,
  InstagramLogo,
  MessengerFillSvg,
  MessengerLineSvg,
  SearchFillSvg,
  SearchSvg,
  SquarePlusFillSvg,
  SquarePlusSvg,
} from '@/assets/svg';
import { auth } from '@/config/firebase';
import Image from 'next/image';
import ContextMenu from './ContextMenu';
import SideNavLink from './SideNavLink';

interface ISideNavProps {}

const SideNav: React.FC<ISideNavProps> = () => {
  const router = useRouter();
  const [loggedInUser] = useAuthState(auth);

  const NAV_LINKS = React.useMemo(
    () => [
      { href: '/', pathname: '/', label: 'Home', icon: <HomeLineSvg />, activeIcon: <HomeFillSvg /> },
      {
        label: 'Search',
        icon: <SearchSvg />,
        activeIcon: <SearchFillSvg />,
      },
      {
        href: '/direct',
        pathname: '/direct',
        label: 'Messages',
        icon: <MessengerLineSvg />,
        activeIcon: <MessengerFillSvg />,
      },
      {
        label: 'Notifications',
        icon: <HeartSvg />,
        activeIcon: <HeartFillSvg />,
      },
      {
        label: 'Create',
        icon: <SquarePlusSvg />,
        activeIcon: <SquarePlusFillSvg />,
      },
      {
        href: `/${loggedInUser?.email}`,
        label: 'Profile',
        pathname: '/[username]',
        icon: (
          <Image
            src={loggedInUser?.photoURL!}
            alt={loggedInUser?.displayName!}
            width={24}
            height={24}
            className="rounded-full"
          />
        ),
        activeIcon: (
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-black" />
            <Image
              src={loggedInUser?.photoURL!}
              alt={loggedInUser?.displayName!}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        ),
      },
    ],
    [loggedInUser],
  );

  return (
    <div className="fixed flex h-screen w-nav-medium flex-col border-r border-neutral-200 bg-white px-3 pb-5 pt-2 2xl:w-nav-wide">
      <div className="mb-5 px-3 pb-4 pt-6">
        <Link href="/" className="active:opacity-50">
          <InstagramLogo className="mt-2" />
        </Link>
      </div>

      <nav className="grow">
        <ul className="flex flex-col">
          {NAV_LINKS.map((link, index) => {
            const isActive =
              (router.pathname === '/' || link.pathname !== '/') && router.pathname.includes(link.pathname!);

            return (
              <li key={index}>
                <SideNavLink link={link} isActive={isActive} />
              </li>
            );
          })}
        </ul>
      </nav>

      <div>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="group relative my-0.5 flex w-full flex-row items-center gap-4 rounded-lg p-3 outline-none transition hover:bg-neutral-100 active:opacity-50">
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
                <Popover.Panel role="dialog" className="absolute bottom-16 z-50 transform">
                  <ContextMenu />
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
