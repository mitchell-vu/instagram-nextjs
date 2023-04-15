import { Layout } from '@/components';
import TabNavigation from '@/components/TabNavigation/TabNavigation';
import { auth } from '@/config/firebase';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NextPageWithLayout } from '../_app';
import { PlusSvg, SettingsSvg } from '@/assets/svg';

interface IProfileProps {}

const Profile: NextPageWithLayout<IProfileProps> = () => {
  const [loggedInUser] = useAuthState(auth);

  return (
    <>
      <Head>
        <title>{loggedInUser?.displayName} | Instagram</title>
      </Head>

      <div className="h-full w-full overflow-y-auto bg-white">
        <div
          className="mx-auto mb-14 box-content flex max-w-[935px] flex-col px-5 pt-7"
          style={{ width: 'calc(100% - 40px)' }}
        >
          <div className="flex grow flex-col">
            <header className="mb-12 flex flex-row items-stretch">
              <div className="relative mr-[30px] flex flex-shrink-0 grow flex-col items-center justify-center">
                <div className="relative">
                  <Image
                    src="https://instagram.fhan5-11.fna.fbcdn.net/v/t51.2885-19/341338122_620645192828655_6495014313330276964_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fhan5-11.fna.fbcdn.net&_nc_cat=103&_nc_ohc=NfmaIOYoShkAX-rLG2u&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC09e84nRgjhFi9ZdevMKqPAQAB7mYAQHN-6b_OSF9clA&oe=643DEEF1&_nc_sid=8fd12b"
                    width={150}
                    height={150}
                    className="rounded-full bg-black"
                    alt={`mit.chell.vu's profile picture`}
                  />
                  <div className="tranform absolute left-0 top-0 h-[150px] w-[150px] scale-110 rounded-full border-2" />
                </div>
              </div>

              <section className="flex flex-shrink flex-grow-[2] flex-col items-stretch">
                <div className="mb-5 flex flex-row items-center">
                  <h2 className="text-xl lowercase">{loggedInUser?.displayName}</h2>
                  <button className="ml-5 h-8 rounded-lg bg-gray-100 px-5 text-sm font-semibold hover:bg-gray-200">
                    Edit profile
                  </button>
                  <button className="ml-2 h-10 w-10 p-2">
                    <SettingsSvg width={24} height={24} />
                  </button>
                </div>

                <ul className="mb-5 flex flex-row gap-10 leading-tight">
                  {[
                    { unit: 'posts', quantity: 21 },
                    { unit: 'followers', quantity: 636 },
                    { unit: 'following', quantity: 1243 },
                  ].map((item, index) => (
                    <li key={index}>
                      <span className="font-bold">{new Intl.NumberFormat().format(item.quantity)}</span> {item.unit}
                    </li>
                  ))}
                </ul>

                <div className="text-sm leading-tight">
                  <span className="font-semibold">mitchell</span>
                  <span className="text-gray-500"> he/him/they</span>
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: 'they say these are the golden years、<br>but i wish i could disappear？',
                    }}
                  />
                </div>
              </section>
            </header>

            <div role="menu" className="mb-10">
              <ul>
                <li className="flex">
                  <div role="menuitem" className="flex cursor-pointer flex-col items-center px-4 py-3">
                    <div className="relative flex h-[77px] w-[77px] items-center justify-center rounded-full bg-gray-50">
                      <PlusSvg width={44} height={44} className="fill-gray-300" />
                      <div className="absolute left-0 top-0 h-full w-full scale-110 transform rounded-full border" />
                    </div>
                    <div className="truncate pt-3 text-xs font-semibold">New</div>
                  </div>
                </li>
              </ul>
            </div>

            <TabNavigation />

            <div className="grid grid-cols-3 gap-1">
              {[
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
                'https://scontent-tpe1-1.cdninstagram.com/v/t51.2885-15/272263498_1514362968961243_6660313042976366365_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=scontent-tpe1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=re_3-jGE3PsAX_s9000&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=Mjc1NzY2NTc2MDAxOTgwNDY4NQ%3D%3D.2-ccb7-5&oh=00_AfCjXvuU1C51gt_4vgAOOz-DjhdA28zQYdKzixGff-jsGA&oe=643C196D&_nc_sid=1527a3',
              ].map((url, index) => (
                <div key={index} className="aspect-square w-full cursor-pointer">
                  <Image
                    src={url}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Photo by mitchell on December 17, 2022."
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Profile;
