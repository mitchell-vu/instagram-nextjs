import * as React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

interface ISideNavLinkProps {
  link: {
    href: string;
    label: string;
    icon: React.ReactNode;
    activeIcon?: React.ReactNode;
  };
  isActive?: boolean;
}

const SideNavLink: React.FunctionComponent<ISideNavLinkProps> = ({ link, isActive }) => {
  return (
    <Link
      href={link.href}
      className="group my-0.5 flex flex-row items-center gap-4 rounded-3xl p-3 transition hover:bg-neutral-50 active:opacity-50"
    >
      <div className="h-6 w-6 transform transition group-hover:scale-105 group-active:scale-95">
        {isActive && !!link.activeIcon ? link.activeIcon : link.icon}
      </div>
      <div className={classNames({ 'font-bold': isActive })}>{link.label}</div>
    </Link>
  );
};

export default SideNavLink;
