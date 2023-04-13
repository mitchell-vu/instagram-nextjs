import { Layout } from '@/components';
import { auth } from '@/config/firebase';
import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = () => {
  const [loggedInUser] = useAuthState(auth);

  return (
    <Layout>
      <Head>
        <title>{loggedInUser?.displayName} | Instagram</title>
      </Head>

      <div className="h-full w-full overflow-y-auto bg-white">
        <div
          className="mx-auto mb-14 box-content flex max-w-[935px] flex-col px-5 pt-7"
          style={{ width: 'calc(100% - 40px)' }}
        >
          <div className="flex grow flex-col">
            <header className="mb-16 flex flex-row items-stretch gap-8">
              <div className="relative flex flex-grow justify-center">
                <div className="relative">
                  <Image
                    src="https://instagram.fhan19-1.fna.fbcdn.net/v/t51.2885-19/340006043_176949998552507_4553709423859098329_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan19-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=CTgGBr1hnQUAX-3EzW1&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBHlT63tLyIOVxv5D9AG_KgY0Cqkxzzr02vPkYcuAKhsw&oe=6438A086&_nc_sid=022a36"
                    width={150}
                    height={150}
                    className="rounded-full bg-black"
                    alt={`mit.chell.vu's profile picture`}
                  />
                  <div className="tranform absolute left-0 top-0 h-[150px] w-[150px] scale-110 rounded-full border-2" />
                </div>
              </div>

              <section className="flex-grow-[2]">
                <div className="mb-5 flex flex-row gap-5">
                  <h2 className="text-xl">{loggedInUser?.displayName}</h2>
                  <button className="h-8 rounded-lg bg-gray-100 px-5 text-sm font-semibold hover:bg-gray-200">
                    Edit profile
                  </button>
                </div>

                <ul className="mb-5 flex flex-row gap-10">
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

                <div className="text-sm">
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
    </Layout>
  );
};

export default Profile;
