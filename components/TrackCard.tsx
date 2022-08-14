import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { nFormatter } from 'utils/number';

interface TrackCardProps {
  track: Track;
}

const STrackCard = tw.a`
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

  h3.artist {
    ${tw`font-normal`}
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

const TrackCard = ({ track }: TrackCardProps) => (
  <STrackCard href={track.url} target="_blank" rel="noreferrer">
    <SProfilePicture>
      <Image
        src={track.image[3]['#text']}
        alt={track.name}
        loading="lazy"
        width={1}
        height={1}
        layout="responsive"
      />
    </SProfilePicture>
    <SInfo>
      <div className="general">
        <h2 className="name">{track.name}</h2>
        <h3 className="artist">{track.artist.name}</h3>
      </div>
      <div className="statistics">
        <div className="statistics__item">
          <p>🎧 Times played</p>
          <span>{nFormatter(Number(track.playcount))}</span>
        </div>
        <div className="statistics__item">
          <p>👤 Listeners</p>
          <span>{nFormatter(Number(track.listeners))}</span>
        </div>
      </div>
    </SInfo>
  </STrackCard>
);

export default TrackCard;
