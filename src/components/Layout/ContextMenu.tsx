import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { ChevronUpSvg, SettingsSvg, SunSvg } from '@/assets/svg';
import classNames from 'classnames';

interface IButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  label: string;
  extend?: boolean;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, icon, label, extend, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'flex flex-row items-center justify-start truncate rounded-lg bg-white p-4 text-sm transition hover:bg-gray-100',
        className,
      )}
    >
      {icon}
      <span className="grow text-left">{label}</span>
      {extend && <ChevronUpSvg className="ml-3 h-3 w-3 rotate-90 transform fill-gray-300" />}
    </button>
  );
};

interface IContextMenuProps {}

const ContextMenu: React.FC<IContextMenuProps> = () => {
  const signOutHandler = () => {
    signOut(auth);
  };

  return (
    <div className="more-menu relative w-64 rounded-2xl bg-white p-2">
      <div className="flex w-full flex-col items-stretch font-medium">
        {[
          {
            label: 'Settings',
            icon: <SettingsSvg className="mr-3 shrink-0" width={18} height={18} />,
            extend: true,
            onClick: () => {},
          },
          {
            label: 'Switch appearance',
            icon: <SunSvg className="mr-3 shrink-0" width={18} height={18} />,
            extend: true,
            onClick: () => {},
          },
        ].map((btn, index) => (
          <div key={index}>
            <Button {...btn} className="w-full" />
            {index !== 1 && <div className="-mx-2 my-2 h-[0.5px] bg-gray-200" />}
          </div>
        ))}

        <div className="-mx-2 my-2 h-[6px] bg-gray-200" />

        {[
          {
            label: 'Switch accounts',
            extend: true,
            onClick: () => {},
          },
          {
            label: 'Log out',
            extend: true,
            onClick: signOutHandler,
          },
        ].map((btn, index) => (
          <div key={`action-${index}`}>
            <Button {...btn} className="w-full" />
            {index !== 1 && <div className="-mx-2 my-2 h-[0.5px] bg-gray-200" />}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-2 ml-5">
        <div className="tail" />
      </div>
    </div>
  );
};

export default ContextMenu;
