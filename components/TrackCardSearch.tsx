import { nFormatter } from 'utils/number';
import { SCard, SInfo, SProfilePicture } from './Card';
import DisplayPhoto from './DisplayPhoto';
import { TrackCardProps } from './TrackCard';

const TrackCardSearch = ({ track }: TrackCardProps) => (
  <SCard href={track.url ?? '#'} target="_blank" rel="noreferrer">
    <SProfilePicture>
      <DisplayPhoto src={track.image[3]['#text']} alt={track.name} />
    </SProfilePicture>
    <SInfo>
      <div className="general">
        <h2 className="name">{track.name}</h2>
        <h3 className="artist">{track.artist as string}</h3>
      </div>
      <div className="statistics">
        <div className="statistics__item">
          <p>👤 Listeners</p>
          <span>{nFormatter(Number(track.listeners))}</span>
        </div>
      </div>
    </SInfo>
  </SCard>
);

export default TrackCardSearch;
