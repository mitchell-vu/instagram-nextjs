import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { ChevronUpSvg, SunSvg } from '@/assets/svg';

interface IMoreMenuProps {}

const MoreMenu: React.FC<IMoreMenuProps> = () => {
  const signOutHandler = () => {
    signOut(auth);
  };

  return (
    <div className="more-menu relative w-64 rounded-2xl bg-white p-2">
      <div className="flex w-full flex-col items-stretch font-medium">
        <button className="flex flex-row items-center justify-start truncate rounded-lg bg-white p-4 text-sm transition hover:bg-gray-100">
          <SunSvg className="mr-3 flex-shrink-0 text-lg" />
          <span className="grow text-left">Switch appearance</span>
          <ChevronUpSvg className="ml-3 h-3 w-3 rotate-90 transform fill-gray-300" />
        </button>
        <div className="-mx-2 my-2 h-[0.5px] bg-gray-100" />
        <button
          onClick={signOutHandler}
          className="flex justify-start truncate rounded-lg bg-white p-4 text-sm transition hover:bg-gray-100"
        >
          Log out
        </button>
      </div>

      <div className="absolute bottom-0 left-2 ml-5">
        <div className="tail" />
      </div>
    </div>
  );
};

export default MoreMenu;
