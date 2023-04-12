import * as React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

interface IConversationSelectProps {
  isOpended: boolean;
  onSelect: () => void;
}

const ConversationSelect: React.FunctionComponent<IConversationSelectProps> = ({ isOpended, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={classNames('group w-full transition hover:bg-neutral-100', {
        'bg-neutral-100 hover:bg-neutral-200': isOpended,
      })}
    >
      <div className="flex w-full flex-row items-center gap-3 px-5 py-2 group-active:opacity-50">
        <Image
          src="https://instagram.fhan19-1.fna.fbcdn.net/v/t51.2885-19/340006043_176949998552507_4553709423859098329_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan19-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CTgGBr1hnQUAX-3EzW1&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBHlT63tLyIOVxv5D9AG_KgY0Cqkxzzr02vPkYcuAKhsw&oe=6438A086&_nc_sid=022a36"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full bg-black"
          alt={`panthehotpot's profile picture`}
        />
        <div className="flex flex-col text-sm">
          <div>mit.chell.vu</div>
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

export default ConversationSelect;
