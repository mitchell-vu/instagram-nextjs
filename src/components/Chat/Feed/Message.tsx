import * as React from 'react';

interface IMessageProps {
  endSequence: boolean;
  isMyself: boolean;
}

const Message: React.FunctionComponent<IMessageProps> = ({ endSequence, isMyself }) => {
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
        <a href="#" className="mb-2 mr-2 h-6 w-6 rounded-full bg-black"></a>
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
