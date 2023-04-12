import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Conversation } from '@/types';
import { useRecipient } from '@/hooks/useRecipient';
import BlankAvatar from '@/assets/images/blank-avatar.jpeg';

interface IThreadListItemProps {
  isOpended: boolean;
  onSelect: () => void;
  thread: Conversation;
}

const ThreadListItem: React.FC<IThreadListItemProps> = ({ isOpended, onSelect, thread }) => {
  const { recipient, recipientEmail } = useRecipient(thread.users);

  return (
    <button
      onClick={onSelect}
      className={classNames('group w-full transition hover:bg-neutral-100', {
        'bg-neutral-100 hover:bg-neutral-200': isOpended,
      })}
    >
      <div className="flex w-full flex-row items-center gap-3 px-5 py-2 group-active:opacity-50">
        <Image
          src={recipient?.photoURL ?? BlankAvatar}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full bg-black"
          alt={`panthehotpot's profile picture`}
        />
        <div className="flex flex-col items-start text-sm">
          <div>{recipientEmail}</div>
          <div className="flex flex-row items-center gap-1 text-neutral-400 ">
            <span>{`:)))))))))))))`}</span>
            <span>·</span>
            <span>1d</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThreadListItem;
