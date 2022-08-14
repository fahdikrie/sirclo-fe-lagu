import { nFormatter } from 'utils/number';
import { ArtistCardProps } from './ArtistCard';
import { SCard, SInfo, SProfilePicture } from './Card';
import DisplayPhoto from './DisplayPhoto';

const ArtistCardSearch = ({ artist }: ArtistCardProps) => (
  <SCard href={artist.url ?? '#'} target="_blank" rel="noreferrer">
    <SProfilePicture>
      <DisplayPhoto src={artist.image[3]['#text']} alt={artist.name} />
    </SProfilePicture>
    <SInfo>
      <h2 className="name">{artist.name}</h2>
      <div className="statistics">
        <div className="statistics__item">
          <p>👤 Listeners</p>
          <span>{nFormatter(Number(artist.listeners))}</span>
        </div>
      </div>
    </SInfo>
  </SCard>
);

export default ArtistCardSearch;
