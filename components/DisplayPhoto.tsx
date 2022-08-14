import Image from 'next/image';
import { useState } from 'react';

interface DisplayPhotoProps {
  src: string;
  alt: string;
}

const DisplayPhoto = ({ src, alt }: DisplayPhotoProps) => {
  const [error, setError] = useState(false);

  return (
    <Image
      src={
        !error
          ? src
          : 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'
      }
      alt={alt}
      width={1}
      height={1}
      priority={true}
      layout="responsive"
      onError={() => setError(true)}
    />
  );
};

export default DisplayPhoto;
