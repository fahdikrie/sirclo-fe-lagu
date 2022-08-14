import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { nFormatter } from 'utils/number';

interface ArtistCardProps {
  artist: Artist;
}

const SArtistCard = tw.a`
  w-full
  bg-gray-50 text-black
  cursor-pointer

  p-2 mb-3 shadow-md
  flex gap-2
  rounded-lg

  hover:bg-opacity-95
`;

const SProfilePicture = tw.div`
  w-32 h-32 rounded overflow-hidden
`;

const SInfo = styled.div`
  ${tw`
    flex flex-col justify-around
  `}

  h2.name {
    ${tw`text-xl font-bold`}
  }

  div.statistics {
    ${tw`flex gap-5`}
  }

  div.statistics__item {
    ${tw`text-left`}

    p {
      ${tw`text-sm`}
    }

    span {
      ${tw`text-sm text-gray-900 font-light`}
    }
  }
`;

const ArtistCard = ({ artist }: ArtistCardProps) => (
  <SArtistCard href={artist.url} target="_blank" rel="noreferrer">
    <SProfilePicture>
      <Image
        src={artist.image[3]['#text']}
        alt={artist.name}
        loading="lazy"
        width={1}
        height={1}
        layout="responsive"
      />
    </SProfilePicture>
    <SInfo>
      <h2 className="name">{artist.name}</h2>
      <div className="statistics">
        <div className="statistics__item">
          <p>🎧 Times played</p>
          <span>{nFormatter(Number(artist.playcount))}</span>
        </div>
        <div className="statistics__item">
          <p>👤 Listeners</p>
          <span>{nFormatter(Number(artist.listeners))}</span>
        </div>
      </div>
    </SInfo>
  </SArtistCard>
);

export default ArtistCard;
