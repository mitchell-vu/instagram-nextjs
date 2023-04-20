import { SettingsSvg } from '@/assets/svg';
import { auth } from '@/config/firebase';
import Image from 'next/image';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IProfileHeaderProps {}

const ProfileHeader: React.FunctionComponent<IProfileHeaderProps> = (props) => {
  const [loggedInUser] = useAuthState(auth);

  return (
    <header className="mb-12 flex flex-row items-stretch">
      <div className="relative mr-[30px] flex shrink-0 grow flex-col items-center justify-center">
        <div className="relative">
          <Image
            src="https://instagram.fhan5-11.fna.fbcdn.net/v/t51.2885-19/341338122_620645192828655_6495014313330276964_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fhan5-11.fna.fbcdn.net&_nc_cat=103&_nc_ohc=NfmaIOYoShkAX-rLG2u&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC09e84nRgjhFi9ZdevMKqPAQAB7mYAQHN-6b_OSF9clA&oe=643DEEF1&_nc_sid=8fd12b"
            width={150}
            height={150}
            className="rounded-full bg-black"
            alt={`mit.chell.vu's profile picture`}
          />
          <div className="tranform absolute left-0 top-0 h-[150px] w-[150px] scale-110 rounded-full border-2" />
        </div>
      </div>

      <section className="flex flex-shrink flex-grow-[2] flex-col items-stretch">
        <div className="mb-5 flex flex-row items-center">
          <h2 className="text-xl lowercase">{loggedInUser?.displayName}</h2>
          <button className="ml-5 h-8 rounded-lg bg-gray-100 px-5 text-sm font-semibold hover:bg-gray-200">
            Edit profile
          </button>
          <button className="ml-2 h-10 w-10 p-2">
            <SettingsSvg width={24} height={24} />
          </button>
        </div>

        <ul className="mb-5 flex flex-row gap-10 leading-tight">
          {[
            { unit: 'posts', quantity: 21 },
            { unit: 'followers', quantity: 636 },
            { unit: 'following', quantity: 1243 },
          ].map((item, index) => (
            <li key={index}>
              <span className="font-bold">{new Intl.NumberFormat().format(item.quantity)}</span> {item.unit}
            </li>
          ))}
        </ul>

        <div className="text-sm leading-tight">
          <span className="font-semibold">mitchell</span>
          <span className="text-gray-500"> he/him/they</span>
          <h1
            dangerouslySetInnerHTML={{
              __html: 'they say these are the golden years、<br>but i wish i could disappear？',
            }}
          />
        </div>
      </section>
    </header>
  );
};

export default ProfileHeader;
