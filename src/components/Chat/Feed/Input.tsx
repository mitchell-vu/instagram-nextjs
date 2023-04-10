import * as React from 'react';
import { EmojiSvg, PhotoSvg, HeartSvg } from '@/assets/svg';

interface IInputProps {}

const Input: React.FunctionComponent<IInputProps> = (props) => {
  return (
    <div className="p-5">
      <div className="flex flex-row items-center rounded-3xl border border-neutral-200 pl-3 pr-2">
        <button className="flex p-2">
          <EmojiSvg className="h-6 w-6" />
        </button>
        <div className="flex flex-1 flex-col items-stretch justify-start">
          <textarea
            placeholder="Message..."
            className="box-content block w-full max-w-full resize-none border-none bg-transparent p-2 text-sm leading-4 outline-none"
            style={{ height: 18 }}
          />
        </div>
        <button className="flex p-2">
          <PhotoSvg className="h-6 w-6" />
        </button>
        <button className="flex p-2">
          <HeartSvg className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Input;
