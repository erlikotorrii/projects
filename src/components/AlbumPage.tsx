import { useParams } from 'react-router-dom'
import { Album } from '../interfaces/Album';
import artists from '../data/db';

const AlbumPage = () => {

    const { id } = useParams<{ id: string }>();

    let album: Album | undefined;
    for (let artist of artists) {
        album = artist.albums.find(a => a.albumId === id);
        if (album) break;
    }

    if (!album) {
        return
        <div>
            Album not Found!
        </div>
    }

    return (
        <div>

            <img src={`/images/albums/${album.cover}.jpg`} alt={album.title} />
            <h1>Title: {album.title}</h1>
            <p>Released: {album.year}</p>
            <p>Price: ${album.price}</p>

        </div>
    )
}

export default AlbumPage