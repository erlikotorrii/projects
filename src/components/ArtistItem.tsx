import { Artist } from '../interfaces/Artist';
import { Link } from 'react-router-dom';

interface ArtistItemProps {
    artist: Artist;
}

const ArtistItem = (props: ArtistItemProps) => {

    const { artist } = props;

    return (
        <div className="artist-item">
            <Link to={`/artist/${artist.id}`}>
                <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
            </Link>
            <div className="artist-details">
                <h2>{artist.name}</h2>
            </div>
        </div>
    );
}

export default ArtistItem