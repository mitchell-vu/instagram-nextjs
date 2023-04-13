import * as React from 'react';
import Image from 'next/image';
import { InfoSvg } from '@/assets/svg';
import { AppUser } from '@/types';
import BlankAvatar from '@/assets/images/blank-avatar.jpeg';

interface IHeaderProps {
  recipient: AppUser | undefined;
  recipientEmail?: AppUser['email'];
}

const Header: React.FC<IHeaderProps> = ({ recipient, recipientEmail }) => {
  return (
    <header className="h-14 border-b border-neutral-200 px-5">
      <div className="flex h-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <Image
            src={recipient?.photoURL ?? BlankAvatar}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full bg-black"
            alt={`panthehotpot's profile picture`}
          />
          <div className="font-semibold">{recipient?.email ?? recipientEmail}</div>
        </div>
        <button className="p-2">
          <InfoSvg aria-label="View Thread Details" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
