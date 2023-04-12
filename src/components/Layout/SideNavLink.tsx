import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface ISideNavLinkProps {
  link: {
    href?: string;
    label: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
    onClick?: () => void;
  };
  isActive?: boolean;
}

const SideNavLink: React.FC<ISideNavLinkProps> = ({ link, isActive }) => {
  return link.href ? (
    <Link
      href={link.href}
      className="group my-1 flex flex-row items-center gap-4 rounded-lg p-3 transition hover:bg-neutral-100 active:opacity-50"
    >
      <div className="h-6 w-6 transform transition group-hover:scale-105 group-active:scale-95">
        {isActive && !!link.activeIcon ? link.activeIcon : link.icon}
      </div>
      <div className={classNames({ 'font-bold': isActive })}>{link.label}</div>
    </Link>
  ) : (
    <button
      onClick={link.onClick}
      className="group my-0.5 flex w-full flex-row items-center gap-4 rounded-lg p-3 transition hover:bg-neutral-100 active:opacity-50"
    >
      <div className="h-6 w-6 transform transition group-hover:scale-105 group-active:scale-95">
        {isActive && !!link.activeIcon ? link.activeIcon : link.icon}
      </div>
      <div className={classNames({ 'font-bold': isActive })}>{link.label}</div>
    </button>
  );
};

export default SideNavLink;
