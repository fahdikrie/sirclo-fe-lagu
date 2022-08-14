import Image from 'next/image';
import tw from 'twin.macro';

interface ArtistCardProps {
  artist: Artist;
}

const SArtistCard = tw.div`
  w-full
  bg-gray-50 text-black

  flex
`;

const SProfilePicture = tw.div`
  w-40 h-40
`;

const ArtistCard = ({ artist }: ArtistCardProps) => (
  <SArtistCard>
    <SProfilePicture>
      <Image
        src={artist.image[1]['#text']}
        alt={artist.name}
        width={40}
        height={40}
        loading="lazy"
        layout="responsive"
      />
    </SProfilePicture>
    <div>
      <div>{artist.name}</div>
    </div>
  </SArtistCard>
);

export default ArtistCard;
