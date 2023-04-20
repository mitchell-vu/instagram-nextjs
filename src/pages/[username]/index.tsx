import { ProfileLayout } from '@/components';
import Post from '@/components/Post/Post';
import PostGridItem from '@/components/Profile/PostGridItem';
import { auth } from '@/config/firebase';
import { Dialog, Transition } from '@headlessui/react';
import Head from 'next/head';
import * as React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NextPageWithLayout } from '../_app';

interface IProfileProps {}

const Profile: NextPageWithLayout<IProfileProps> = () => {
  const [loggedInUser] = useAuthState(auth);
  const [isPostModalOpen, setIsPostModalOpen] = React.useState(false);

  const openPostModal = () => {
    setIsPostModalOpen(true);
    // Change the URL without reloading the page
    window.history.pushState(null, 'Post by mit.chell.vu', '/p/postId');
  };
  const closePostModal = () => {
    setIsPostModalOpen(false);
    window.history.pushState(null, 'mit.chell.vu\'s profile', '/@mit.chell.vu');
  };

  return (
    <>
      <Head>
        <title>{loggedInUser?.displayName} | Instagram</title>
      </Head>

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
          <PostGridItem key={index} url={url} onClick={openPostModal} />
        ))}
      </div>

      <Transition appear show={isPostModalOpen} as={React.Fragment}>
        <Dialog as="div" onClose={closePostModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-5xl bg-white">
                  <Post />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Profile.getLayout = function getLayout(page: React.ReactElement) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default Profile;
