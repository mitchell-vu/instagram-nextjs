import * as React from 'react';
import Head from 'next/head';

import { Layout } from '@/components';
import { NextPageWithLayout } from '@/pages/_app';
import Post from '@/components/Feed/Post';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mitchell Vu ー Instagram</title>
        <meta name="description" content="Instagram Direct Clone" />
      </Head>

      <div className="flex min-h-screen w-full flex-col bg-white">
        <div className="mx-auto flex w-full flex-row pt-1" style={{ maxWidth: 1013 }}>
          <div className="mr-16 mt-10 w-full max-w-[630px] shrink-0">
            <div className="mx-auto max-w-[470px]">
              <Post />
              <Post />
              <Post />
            </div>
          </div>

          <div className="w-[319px] shrink-0">
            <div className="mb-8 pt-8">
              <div className="mb-3 mt-4 flex cursor-pointer flex-row items-center gap-4">
                <Link href={`/mitchell.vu`} className="relative h-14 w-14">
                  <Image
                    src="https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3"
                    className="h-full w-full rounded-full object-cover"
                    width={56}
                    height={56}
                    priority={true}
                    alt="Mitchell Vu"
                  />
                </Link>

                <Link href={`/mitchell.vu`} className="flex flex-col text-sm leading-tight">
                  <div className="font-semibold">mit.chell.vu</div>
                  <div className="text-gray-500">mitchell</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
