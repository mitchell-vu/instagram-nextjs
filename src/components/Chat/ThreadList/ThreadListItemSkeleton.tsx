import * as React from 'react';

const ThreadListItemSkeleton: React.FC = () => {
  return (
    <div className="flex w-full flex-row items-center gap-3 px-5 py-2 group-active:opacity-50">
      <div className="h-14 w-14 flex-shrink-0 rounded-full bg-gray-100" />
      <div className="flex h-14 w-full flex-col justify-between py-2">
        <div className="h-[14px] w-10/12 rounded-[4px] bg-gray-100"></div>
        <div className="h-[14px] w-8/12 rounded-[4px] bg-gray-100" />
      </div>
    </div>
  );
};

export default ThreadListItemSkeleton;
