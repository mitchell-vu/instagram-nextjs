import * as React from 'react';
import Image from 'next/image';

interface IMessageProps {
  endSequence: boolean;
  isMyself: boolean;
}

const Message: React.FC<IMessageProps> = ({ endSequence, isMyself }) => {
  return isMyself ? (
    <div className="flex items-end justify-start">
      <div className="mb-2 mr-2 h-6 w-6" />
      <div className="flex flex-1 flex-col">
        <div className="mb-2 max-w-[236px] self-end rounded-3xl border border-transparent bg-neutral-100 p-4 text-sm">
          <div className="-my-1">
            dm nôn xong mệt thật dm nôn xong mệt thật dm nôn xong mệt thật dm nôn xong mệt thật dm nôn xong mệt thật
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-end justify-start">
      {endSequence ? (
        <a href="#" className="mb-2 mr-2 h-6 w-6 overflow-hidden rounded-full">
          <Image
            src="https://instagram.fhan19-1.fna.fbcdn.net/v/t51.2885-19/340006043_176949998552507_4553709423859098329_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan19-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CTgGBr1hnQUAX-3EzW1&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBHlT63tLyIOVxv5D9AG_KgY0Cqkxzzr02vPkYcuAKhsw&oe=6438A086&_nc_sid=022a36"
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
          <div className="-my-1">dm nôn xong mệt thật</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
