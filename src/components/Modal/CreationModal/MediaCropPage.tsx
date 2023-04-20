import * as React from 'react';

interface IMediaCropPageProps {
  selectedMedia: any;
}

const MediaCropPage: React.FunctionComponent<IMediaCropPageProps> = ({ selectedMedia }) => {
  return (
    <div className="aspect-square h-full w-full">
      <img src={selectedMedia} className="h-full w-full object-cover" />
    </div>
  );
};

export default MediaCropPage;
