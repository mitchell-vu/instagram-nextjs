import * as React from 'react';
import Image from 'next/image';
import { InfoSvg } from '@/assets/svg';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className="h-14 border-b border-neutral-200 px-5">
      <div className="flex h-full flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <Image
            src="https://instagram.fhan19-1.fna.fbcdn.net/v/t51.2885-19/340006043_176949998552507_4553709423859098329_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan19-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CTgGBr1hnQUAX-3EzW1&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBHlT63tLyIOVxv5D9AG_KgY0Cqkxzzr02vPkYcuAKhsw&oe=6438A086&_nc_sid=022a36"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full bg-black"
            alt={`panthehotpot's profile picture`}
          />
          <div className="font-semibold">Mitchell Vu</div>
        </div>
        <button className="p-2">
          <InfoSvg aria-label="View Thread Details" className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
