import { BookmarkSvg, CommentSvg, EmojiSvg, HeartSvg, PaperPlaneSvg, ThreeDotsSvg } from '@/assets/svg';
import useAutosizeTextArea from '@/hooks/useAutoResizeTextarea';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IPostProps {}

const Post: React.FunctionComponent<IPostProps> = (props) => {
  const [comment, setComment] = React.useState<string>('');
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, comment, 18, 5);

  return (
    <article className="mb-3 border-b pb-5">
      <div className="flex flex-row items-center gap-2">
        <header className="mx-1 my-2 flex min-h-[40px] grow flex-row items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src="https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3"
              className="h-full w-full rounded-full object-cover"
              width={32}
              height={32}
              priority={true}
              alt="Mitchell Vu"
            />
            <div className="absolute left-0 top-0 h-full w-full scale-125 transform rounded-full border" />
          </div>

          <div className="flex flex-col justify-center text-sm leading-tight">
            <div className="flex max-w-full flex-row">
              <Link href={`/mitchell.vu`} className="font-semibold">
                mit.chell.vu
              </Link>
              <div className="text-gray-500">
                <span>・</span>
                <span>10h</span>
              </div>
            </div>
          </div>
        </header>

        <button className="flex items-center justify-center p-2 hover:opacity-50">
          <ThreeDotsSvg width={24} height={24} />
        </button>
      </div>

      <div>
        <div className="overflow-hidden rounded border border-gray-100">
          <Image
            src="https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3"
            className="h-auto w-full object-cover"
            width={800}
            height={800}
            priority={true}
            //   sizes="(max-width: 767px) 100vw, (min-width: 768px) 70vw"
            alt="Mitchell Vu"
          />
        </div>

        <section className="my-1 flex flex-row first-of-type:-ml-2 last-of-type:-mr-2">
          <button className="p-2 hover:opacity-50">
            <HeartSvg width={24} height={24} />
          </button>
          <button className="p-2 hover:opacity-50">
            <CommentSvg width={24} height={24} />
          </button>
          <button className="p-2 hover:opacity-50">
            <PaperPlaneSvg width={24} height={24} />
          </button>
          <button className="ml-auto p-2 hover:opacity-50">
            <BookmarkSvg width={24} height={24} />
          </button>
        </section>

        <section className="mb-2 text-sm">
          Liked by
          <span>&nbsp;</span>
          <Link href={`/mit.chell.vu`} className="font-semibold active:opacity-50">
            mitchell.vu
          </Link>
          <span>&nbsp;</span>
          and <button className="font-semibold active:opacity-50">other</button>
        </section>

        <section className="text-sm">
          <Link href={`/mit.chell.vu`} className="font-semibold">
            mit.chell.vu
          </Link>
          <span>&nbsp;</span>
          <span>
            cũng úp mở nhiều với các bạn ghé Câu Lạc Bộ mấy hôm rồi, tối nay chính thức thông báo. cuối tháng Tư này,...{' '}
          </span>
        </section>

        <section className="mt-3">
          <form className="flex flex-row items-center" onSubmit={(e) => e.preventDefault()}>
            <textarea
              ref={textAreaRef}
              name="comment"
              aria-label="Add a comment..."
              placeholder="Add a comment..."
              className="w-full resize-none text-sm leading-snug outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            {comment && <button className="mx-2 text-sm font-semibold text-sky-500 hover:text-sky-900">Post</button>}
            <button className="fill-gray-500 active:opacity-50">
              <EmojiSvg height={14} width={14} />
            </button>
          </form>
        </section>
      </div>
    </article>
  );
};

export default Post;
