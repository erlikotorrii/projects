fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(artists => {
        const artistDropdown = document.getElementById('artist-dropdown');

        for (let i = 0; i < artists.length; i++) {
            const artist = artists[i];
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.className = 'dropdown-item';
            link.href = `artists.html?artist=${artist.name}`;
            link.textContent = artist.name;

            listItem.appendChild(link);
            artistDropdown.appendChild(listItem);
        }
    })
    .catch(error => console.error('Error:', error));