import * as React from 'react';
import Image from 'next/image';
import { AppUser, IMessage } from '@/types';
import { User } from 'firebase/auth';
import BlankAvatar from '@/assets/images/blank-avatar.jpeg';

interface IMessageProps {
  endSequence: boolean;
  isMyself: boolean;
  message: IMessage;
  sendUser: User | AppUser | null | undefined;
}

const Message: React.FC<IMessageProps> = ({ endSequence, isMyself, message, sendUser }) => {
  return isMyself ? (
    <div className="flex items-end justify-start">
      <div className="mb-2 mr-2 h-6 w-6" />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 max-w-[236px] self-end rounded-3xl border border-transparent bg-neutral-100 p-4 text-sm">
          <div className="-my-1">{message.text}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-end justify-start">
      {endSequence ? (
        <a href="#" className="mb-2 mr-2 h-6 w-6 overflow-hidden rounded-full">
          <Image
            src={sendUser?.photoURL ?? BlankAvatar}
            width={24}
            height={24}
            className="h-full w-full bg-black"
            alt={`panthehotpot's profile picture`}
          />
        </a>
      ) : (
        <div className="mb-2 mr-2 h-6 w-6" />
      )}
      <div className="flex flex-1 flex-col">
        <div className="mb-2 max-w-[236px] self-start rounded-3xl border border-neutral-200 p-4 text-sm">
          <div className="-my-1">{message.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
