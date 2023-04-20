import * as React from 'react';
import { NextPageWithLayout } from '../_app';
import { Layout } from '@/components';
import Post from '@/components/Post/Post';

interface IPostProps {}

const PostPage: NextPageWithLayout<IPostProps> = (props) => {
  return (
    <div className="mb-4 flex px-5 pt-4">
      <div className="mx-auto rounded border">
        <Post />
      </div>
    </div>
  );
};

PostPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <div className="h-full min-h-screen w-full overflow-y-auto bg-white">{page}</div>
    </Layout>
  );
};

export default PostPage;
