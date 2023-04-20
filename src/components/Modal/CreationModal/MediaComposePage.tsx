import { EmojiSvg } from '@/assets/svg';
import Image from 'next/image';
import * as React from 'react';

interface IMediaComposePageProps {
  selectedMedia: any;
}

const MediaComposePage: React.FunctionComponent<IMediaComposePageProps> = ({ selectedMedia }) => {
  const [caption, setCaption] = React.useState('');

  return (
    <div className="flex flex-row">
      <div className="aspect-square h-full w-full">
        <img src={selectedMedia} className="h-full w-full object-cover" />
      </div>

      <div className="flex w-[340px] shrink-0 flex-col border-l">
        <div className="mx-4 mb-[14px] mt-[18px] flex flex-row items-center gap-3">
          <div className="relative h-7 w-7">
            <Image
              src="https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3"
              className="h-full w-full rounded-full object-cover"
              width={28}
              height={28}
              priority={true}
              alt="Mitchell Vu"
            />
          </div>

          <div className="flex flex-col justify-center text-sm leading-tight">
            <div className="flex max-w-full flex-row">
              <div className="font-semibold">mit.chell.vu</div>
            </div>
          </div>
        </div>

        <textarea
          placeholder="Write a caption..."
          className="grow resize-none px-4 outline-none placeholder:text-gray-300"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <div className="flex flex-row">
          <div className="grow px-2 py-1">
            <button className="fill-gray-500 p-2">
              <EmojiSvg width={20} height={20} />
            </button>
          </div>

          <div className="flex shrink items-center justify-center">
            <div className="-my-0.5 px-4 text-xs text-gray-400">
              <span>{caption.length}</span>/<span>2,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaComposePage;
