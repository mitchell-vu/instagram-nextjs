import * as React from 'react';
import { Layout, TabNavigation } from '@/components';
import { PlusSvg } from '@/assets/svg';
import ProfileHeader from './ProfileHeader';

interface IProfileLayoutProps {
  children: React.ReactNode;
}

const ProfileLayout: React.FunctionComponent<IProfileLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <div className="h-full w-full overflow-y-auto bg-white">
        <div
          className="mx-auto mb-14 box-content flex max-w-[935px] flex-col px-5 pt-7"
          style={{ width: 'calc(100% - 40px)' }}
        >
          <div className="flex grow flex-col">
            <ProfileHeader />

            <div role="menu" className="mb-10">
              <ul className="px-6">
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
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout;
