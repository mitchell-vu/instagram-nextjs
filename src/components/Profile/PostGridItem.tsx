import { CommentFillSvg, HeartFillSvg } from '@/assets/svg';
import Image from 'next/image';
import * as React from 'react';

const StatsOverlay: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 text-white">
      <ul className="flex flex-row items-center gap-7">
        <li className="flex flex-row items-center gap-2 font-semibold text-white">
          <HeartFillSvg width={19} height={19} className="mt-1 fill-white" />
          22
        </li>
        <li className="flex flex-row items-center gap-2 font-semibold text-white">
          <CommentFillSvg width={19} height={19} className="mt-1 fill-white" />1
        </li>
      </ul>
    </div>
  );
};

interface IPostGridItemProps {
  url: string;
  onClick?: () => void;
}

const PostGridItem: React.FC<IPostGridItemProps> = ({ url, onClick }) => {
  const postRef = React.useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const post = postRef.current;

    if (post) {
      post.addEventListener('mouseenter', handleMouseEnter);
      post.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      post?.removeEventListener('mouseenter', handleMouseEnter);
      post?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div ref={postRef} className="relative aspect-square w-full cursor-pointer active:opacity-50" onClick={onClick}>
      <Image
        src={url}
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Photo by mitchell on December 17, 2022."
      />
      {isHovering && <StatsOverlay />}
    </div>
  );
};

export default PostGridItem;
