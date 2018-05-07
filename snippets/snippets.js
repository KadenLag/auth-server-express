// retrieve json - using fetch/async/await
// https://rallycoding.herokuapp.com/api/music_albums

async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log('json data:', json);
}

fetchAlbums();
