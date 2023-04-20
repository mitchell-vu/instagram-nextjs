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
    <article className="flex flex-row" role="presentation">
      <div>
        <Image
          src="https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272472740_645773976570319_5653907365580294357_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=GHSUMbTvJvgAX9kYRnC&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc1NzY3MTgwNjkzMTI2NjYxNA%3D%3D.2-ccb7-5&oh=00_AfCNeDy6YyFARtHD6T6wMict3Dd9_cwFjQPr0SkeqEUBrg&oe=64443E03&_nc_sid=30a2efÇç"
          className="h-auto w-full object-cover"
          width={800}
          height={800}
          priority={true}
          //   sizes="(max-width: 767px) 100vw, (min-width: 768px) 70vw"
          alt="Mitchell Vu"
        />
      </div>

      <div className="flex max-w-[500px] flex-col text-left">
        <div className="flex flex-row items-center border-b">
          <header className="flex min-h-[40px] grow flex-row items-center gap-3 p-[14px] pl-4">
            <div className="relative h-8 w-8">
              <Image
                src="https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3"
                className="h-full w-full rounded-full object-cover"
                width={32}
                height={32}
                priority={true}
                alt="Mitchell Vu"
              />
            </div>

            <div className="flex flex-col justify-center text-sm leading-tight">
              <div className="flex max-w-full flex-row">
                <Link href={`/mitchell.vu`} className="font-semibold">
                  mit.chell.vu
                </Link>
              </div>
            </div>
          </header>

          <button className="flex items-center justify-center p-2 hover:opacity-50">
            <ThreeDotsSvg width={24} height={24} />
          </button>
        </div>

        <div className="flex grow flex-col">
          <section className="order-3 mt-1 flex flex-row border-t px-4 py-2">
            <button className="-ml-2 p-2 hover:opacity-50">
              <HeartSvg width={24} height={24} />
            </button>
            <button className="p-2 hover:opacity-50">
              <CommentSvg width={24} height={24} />
            </button>
            <button className="p-2 hover:opacity-50">
              <PaperPlaneSvg width={24} height={24} />
            </button>
            <button className="-mr-2 ml-auto p-2 hover:opacity-50">
              <BookmarkSvg width={24} height={24} />
            </button>
          </section>

          <section className="order-4 mb-1 px-4 text-sm leading-tight">
            Liked by
            <span>&nbsp;</span>
            <Link href={`/mit.chell.vu`} className="font-semibold active:opacity-50">
              mitchell.vu
            </Link>
            <span>&nbsp;</span>
            and <button className="font-semibold active:opacity-50">other</button>
          </section>

          <div className="order-5 mb-4 px-4 leading-none">
            <Link href="/p/postId" className="text-[10px] uppercase text-gray-500">
              <time className="tracking-wide" dateTime="2022-01-23T17:48:38.000Z" title="Jan 24, 2022">
                January 24, 2022
              </time>
            </Link>
          </div>

          <section className="order-1 flex grow flex-col overflow-x-hidden py-4">
            <div className="flex h-full flex-col items-center justify-center leading-tight">
              <div className="mb-2 text-2xl font-bold">No comments yet.</div>
              <div className="text-sm">Start the conversation.</div>
            </div>
          </section>

          <section className="order-6 border-t px-4 py-2 pl-0">
            <form className="flex flex-row items-center" onSubmit={(e) => e.preventDefault()}>
              <button className="fill-black px-4 py-2 active:opacity-50">
                <EmojiSvg height={24} width={24} />
              </button>
              <textarea
                ref={textAreaRef}
                name="comment"
                aria-label="Add a comment..."
                placeholder="Add a comment..."
                className="box-content block max-w-full resize-none border-none bg-transparent text-sm leading-4 outline-none"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{ height: 18 }}
              />
              <button
                className="mx-2 text-sm font-semibold text-sky-500 enabled:hover:text-sky-900 disabled:opacity-50"
                disabled={!comment}
              >
                Post
              </button>
            </form>
          </section>
        </div>
      </div>
    </article>
  );
};

export default Post;
