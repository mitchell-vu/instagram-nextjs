import { MediaSvg } from '@/assets/svg';
import * as React from 'react';

interface IMediaSelectPageProps {
  setMediaStep: React.Dispatch<React.SetStateAction<'select' | 'crop' | 'compose'>>;
  setSelectedMedia: React.Dispatch<React.SetStateAction<any>>;
}

const MediaSelectPage: React.FunctionComponent<IMediaSelectPageProps> = ({ setMediaStep, setSelectedMedia }) => {
  const filePickerRef = React.useRef<any>(null);

  const selectImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const target = e.target;

    if (target.files?.[0]) {
      reader.readAsDataURL(target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedMedia(readerEvent.target?.result);
      setMediaStep('crop');
    };
  };
  return (
    <div
      className="flex flex-col items-center justify-center p-6 text-center"
      style={{ minWidth: 348, minHeight: 391, maxWidth: 855, maxHeight: 898 }}
    >
      <MediaSvg height={77} />
      <div className="mt-4 text-xl">Drag photos and videos here</div>
      <button
        onClick={() => filePickerRef.current.click()}
        className="mt-4 rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white outline-none hover:bg-sky-600 disabled:opacity-70"
      >
        Select from computer
      </button>
      <form encType="multipart/form-data" method="POST" role="presentation">
        <input
          ref={filePickerRef}
          type="file"
          accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime"
          className="hidden"
          onChange={selectImageHandler}
        />
      </form>
    </div>
  );
};

export default MediaSelectPage;
