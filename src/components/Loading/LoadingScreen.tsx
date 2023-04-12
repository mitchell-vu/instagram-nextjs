import * as React from 'react';
import Image from 'next/image';

import InstagramLogo from '@/assets/images/instagram-icon-gradient.png';
import FromMeta from '@/assets/images/from-meta.png';

interface ILoadingScreenProps {}

const LoadingScreen: React.FC<ILoadingScreenProps> = () => {
  return (
    <div id="splash-screen" className="fixed left-0 top-0 z-50 h-full w-full bg-white">
      <Image
        src={InstagramLogo}
        width={80}
        height={80}
        priority
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        alt="Instagram"
      />

      <Image
        src={FromMeta}
        width={80}
        height={80}
        priority
        className="absolute bottom-9 left-1/2 h-auto w-auto -translate-x-1/2 transform"
        alt="From Meta"
      />
    </div>
  );
};

export default LoadingScreen;
