import React from 'react';
import Image from 'next/image';

const WavingHand = (props: { className?: string }) => (
  <Image
    src="/waving-hand.svg"
    alt="Waving Hand"
    width={28}
    height={28}
    {...props}
  />
);

export default WavingHand;