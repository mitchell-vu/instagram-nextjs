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
    badge?: boolean | number;
    isActive?: boolean;
  };
  isActive?: boolean;
  isModalOpen?: boolean;
}

// TODO: Move to new Icon Button component
const SideNavLink: React.FC<ISideNavLinkProps> = ({ link, isActive, isModalOpen }) => {
  const linkContent = (
    <div
      className={classNames(
        'group my-0.5 flex w-full flex-row items-center gap-4 rounded-lg p-3 transition',
        'border hover:bg-neutral-100 active:opacity-50',
        { 'border-transparent': !link.isActive },
        { 'border-gray-200': link.isActive },
      )}
    >
      <div className="h-6 w-6 flex-shrink-0 transform transition group-hover:scale-105 group-active:scale-95">
        {link.badge && (
          <div
            className={classNames(
              'absolute box-content rounded-full border-[1.5px] border-white bg-red-500',
              { '-right-0.5 top-0 h-2 w-2 items-center justify-center': typeof link.badge !== 'number' },
              { ' -right-2 -top-2 flex h-4 w-4 items-center justify-center': typeof link.badge === 'number' },
            )}
          >
            {typeof link.badge === 'number' && (
              <span className="px-[3px] py-[5px] text-[11px] text-white">{link.badge}</span>
            )}
          </div>
        )}
        {(isActive || link.isActive) && !!link.activeIcon ? link.activeIcon : link.icon}
      </div>
      <div className={classNames({ 'font-bold': isActive }, { 'opacity-0': isModalOpen })}>{link.label}</div>
    </div>
  );

  return link.href ? (
    <Link href={link.href} onClick={link.onClick} className="w-full">
      {linkContent}
    </Link>
  ) : (
    <button onClick={link.onClick} className="w-full">
      {linkContent}
    </button>
  );
};

export default SideNavLink;
