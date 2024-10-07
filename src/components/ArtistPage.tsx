import { useParams } from 'react-router-dom'
import artists from '../data/db';
import AlbumsList from './AlbumsList';

const ArtistPage = () => {

    const { id } = useParams<{ id: string }>();
    const artist = artists.find(a => a.id === parseInt(id || '0'));

    if (!artist) {
        return
        <div>
            Artist Not Found
        </div>
    }

    return (
        <div className="artist-item">
            <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
            <div className="artist-details">
                <h1>{artist.name}</h1>
                <p>{artist.bio}</p>
            </div>
            <AlbumsList albums={artist.albums} />
        </div>
    )
}

export default ArtistPage