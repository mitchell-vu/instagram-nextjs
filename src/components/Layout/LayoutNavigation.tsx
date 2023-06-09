import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  CompassFillSvg,
  CompassSvg,
  HamburgerFillSvg,
  HamburgerSvg,
  HeartFillSvg,
  HeartSvg,
  HomeFillSvg,
  HomeLineSvg,
  InstagramLogo,
  InstagramTypoLogo,
  MessengerFillSvg,
  MessengerLineSvg,
  SearchFillSvg,
  SearchSvg,
  SquarePlusFillSvg,
  SquarePlusSvg,
  VideoPlayFillSvg,
  VideoPlaySvg,
} from '@/assets/svg';
import { auth } from '@/config/firebase';
import CreationModal from '../Modal/CreationModal/CreationModal';
import ContextMenu from './ContextMenu';
import LayoutNavigationLink from './LayoutNavigationLink';
import LayoutNavigationSubPane from './LayoutNavigationSubPane';

interface ILayoutNavigationProps {}

const LayoutNavigation: React.FC<ILayoutNavigationProps> = () => {
  const router = useRouter();
  const [loggedInUser] = useAuthState(auth);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = React.useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = React.useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = React.useState(false);

  const NAV_LINKS = React.useMemo(
    () => [
      {
        href: '/',
        pathname: '/',
        label: 'Home',
        icon: <HomeLineSvg />,
        activeIcon: <HomeFillSvg />,
        onClick: () => closeAllModals(),
      },
      {
        label: 'Search',
        icon: <SearchSvg />,
        activeIcon: <SearchFillSvg />,
        onClick: () => {
          if (isNotificationModalOpen) {
            setIsNotificationModalOpen(false);
          }
          setIsSearchModalOpen((currState) => !currState);
        },
        isActive: isSearchModalOpen,
        border: true,
      },
      {
        href: '/explore',
        pathname: '/explore',
        label: 'Explore',
        icon: <CompassSvg />,
        activeIcon: <CompassFillSvg />,
      },
      {
        href: '/reels',
        pathname: '/reels',
        label: 'Reels',
        icon: <VideoPlaySvg />,
        activeIcon: <VideoPlayFillSvg />,
      },
      {
        href: '/direct',
        pathname: '/direct',
        label: 'Messages',
        icon: <MessengerLineSvg />,
        activeIcon: <MessengerFillSvg />,
        badge: 2,
        onClick: () => closeAllModals(),
      },
      {
        label: 'Notifications',
        icon: <HeartSvg />,
        activeIcon: <HeartFillSvg />,
        badge: true,
        onClick: () => {
          if (isSearchModalOpen) {
            setIsSearchModalOpen(false);
          }
          setIsNotificationModalOpen((currState) => !currState);
        },
        isActive: isNotificationModalOpen,
        border: true,
      },
      {
        label: 'Create',
        icon: <SquarePlusSvg />,
        activeIcon: <SquarePlusFillSvg />,
        onClick: () => {
          closeAllModals();
          setIsCreatePostModalOpen(true);
        },
        isActive: isCreatePostModalOpen,
        border: false,
      },
      {
        href: `/${loggedInUser?.email}`,
        label: 'Profile',
        pathname: '/[username]',
        icon: (
          <div className="relative shrink-0">
            <Image
              src={loggedInUser?.photoURL!}
              alt={loggedInUser?.displayName!}
              width={24}
              height={24}
              className="rounded-full"
            />
          </div>
        ),
        activeIcon: (
          <div className="relative shrink-0">
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
        onClick: () => closeAllModals(),
      },
    ],
    [loggedInUser, isNotificationModalOpen, isSearchModalOpen, isCreatePostModalOpen],
  );

  const isModalOpen = isNotificationModalOpen || isSearchModalOpen;

  const closeAllModals = () => {
    setIsNotificationModalOpen(false);
    setIsSearchModalOpen(false);
  };

  return (
    <div className="fixed z-[100] flex flex-col">
      <div className="relative z-20">
        <nav
          className={classNames(
            'relative flex h-screen flex-col border-r border-neutral-200 bg-white px-3 pb-5 pt-2 transition-transform',
            {
              'w-nav-narrow': isModalOpen,
              'w-nav-medium 2xl:w-nav-wide': !isModalOpen,
            },
          )}
        >
          <div className="mb-5 h-[73px] shrink-0">
            <Link href="/" className="active:opacity-50" onClick={closeAllModals}>
              {isModalOpen ? (
                <div className="pt-3">
                  <div className="group my-1 transform rounded-lg p-3 transition hover:scale-105 hover:bg-neutral-100 active:scale-95 active:opacity-50">
                    <InstagramLogo />
                  </div>
                </div>
              ) : (
                <div className="mt-2 px-3 pb-3 pt-6">
                  <InstagramTypoLogo height={29} width={103} />
                </div>
              )}
            </Link>
          </div>

          <ul className="flex grow flex-col">
            {NAV_LINKS.map((link, index) => {
              const isActive =
                (router.pathname === '/' || link.pathname !== '/') && router.pathname.includes(link.pathname!);

              return (
                <li key={index}>
                  <LayoutNavigationLink link={link} isActive={isActive} isModalOpen={isModalOpen} />
                </li>
              );
            })}
          </ul>

          <div>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="group relative my-0.5 flex w-full flex-row items-center gap-4 rounded-lg p-3 outline-none transition hover:bg-neutral-100 active:opacity-50">
                    <div className="h-6 w-6 transform transition group-hover:scale-105 group-active:scale-95">
                      {open ? <HamburgerFillSvg width={24} heigh={24} /> : <HamburgerSvg width={24} heigh={24} />}
                    </div>
                    <div className={classNames({ 'font-bold': open }, { 'opacity-0': isModalOpen })}>More</div>
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
        </nav>
      </div>

      {isNotificationModalOpen && (
        <LayoutNavigationSubPane title="Notifications">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, nesciunt.
        </LayoutNavigationSubPane>
      )}

      {isSearchModalOpen && (
        <LayoutNavigationSubPane title="Search">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, nesciunt.
        </LayoutNavigationSubPane>
      )}

      <CreationModal isOpen={isCreatePostModalOpen} onClose={() => setIsCreatePostModalOpen(false)} />
    </div>
  );
};

export default LayoutNavigation;
