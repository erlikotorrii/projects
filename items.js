document.addEventListener('DOMContentLoaded', function () {

    
    function getArtistName(name) {
        const getName = new URLSearchParams(window.location.search);
        return getName.get(name);
    }

    function loadItems() {
        let items = JSON.parse(localStorage.getItem('items'));
        if (!items || items.length === 0) {
            items = initialItems;
            saveItems(items);
        }
        return items;
    }

    function saveItems(items) {
        localStorage.setItem('items', JSON.stringify(items));
    }

    const artistName = getArtistName('artist');

    const artistNameElement = document.getElementById('artistName');
    if (artistName) {
        artistNameElement.textContent = `${artistName}`;
    } else {
        artistNameElement.textContent = 'Unknown';
    }

    const itemsLink = document.getElementById('items');
    if (itemsLink) {
        itemsLink.href = `items.html?artist=${artistName}`;
    }

    const homeLink = document.getElementById('home');
    if (homeLink) {
        homeLink.href = `artists.html?artist=${artistName}`;
    }

    let items = loadItems();
    const artistItems = items.filter(item => item.artist === artistName);

    const addItemForm = document.getElementById('addItemForm');
    const addItemBtn = document.getElementById('addItemBtn');

    const itemTypeSelect = document.getElementById('itemType');
    itemTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        itemTypeSelect.appendChild(option);
    });

    addItemBtn.addEventListener('click', () => {
        const itemImage = document.getElementById('itemImage').value;
        const itemTitle = document.getElementById('itemTitle').value;
        const itemDescription = document.getElementById('itemDescription').value;
        const itemType = document.getElementById('itemType').value;
        const itemIsPublished = document.getElementById('itemIsPublished').checked;
        const itemPrice = document.getElementById('itemPrice').value;

        if (!itemTitle || !itemType || !itemPrice) {
            alert('Please fill in all required fields.');
            return;
        }

        const newItem = {
            id: items.length + 1,
            title: itemTitle,
            description: itemDescription,
            type: itemType,
            image: itemImage,
            price: itemPrice,
            artist: artistName,
            dateCreated: new Date(),
            isPublished: itemIsPublished,
            isAuctioning: false,
            dateSold: null,
            priceSold: null,
        };

        items.push(newItem);
        saveItems(items);
        renderCards(items.filter(item => item.artist === artistName));

        const addItemModal = bootstrap.Modal.getInstance(document.getElementById('addItemModal'));
        addItemModal.hide();
        addItemForm.reset();
    });

    function renderCards(items) {
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML = '';

        items.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardImage = document.createElement('img');
            cardImage.classList.add('card-image');
            cardImage.src = item.image;
            cardImage.alt = item.title;
            card.appendChild(cardImage);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const artistTitle = document.createElement('h1');
            artistTitle.classList.add('card-title');
            artistTitle.style.fontFamily = 'Reenie Beanie';
            artistTitle.textContent = item.artist;
            cardBody.appendChild(artistTitle);

            const price = document.createElement('button');
            price.classList.add('btn', 'card-price');
            price.textContent = `$${item.price}`;
            cardBody.appendChild(price);

            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = item.title;
            cardBody.appendChild(title);

            const description = document.createElement('p');
            description.classList.add('card-text');
            description.textContent = item.description;
            cardBody.appendChild(description);

            const dateCreated = new Date(item.dateCreated);
            const day = dateCreated.getDate();
            const month = dateCreated.getMonth() + 1;
            const year = dateCreated.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;

            const date = document.createElement('h5');
            date.classList.add('card-title');
            date.textContent = formattedDate;
            cardBody.appendChild(date);

            const remove = document.createElement('button');
            remove.classList.add('btn', 'btn-danger', 'card-buttons');
            remove.textContent = 'Remove';
            cardBody.appendChild(remove);

            remove.addEventListener('click', () => {
                if (confirm('Are you sure you want to remove this item?')) {
                    const index = items.findIndex(i => i.id === item.id);
                    if (index > -1) {
                        items.splice(index, 1);
                        saveItems(items);
                        renderCards(items.filter(i => i.artist === artistName));
                    }
                }
            });

            const unpublish = document.createElement('button');
            unpublish.classList.add('btn', 'btn-success', 'card-buttons');
            unpublish.textContent = item.isPublished ? 'Unpublish' : 'Publish';
            cardBody.appendChild(unpublish);

            unpublish.addEventListener('click', () => {
                item.isPublished = !item.isPublished;
                unpublish.textContent = item.isPublished ? 'Unpublish' : 'Publish';
                saveItems(items);
            });

            const edit = document.createElement('button');
            edit.classList.add('btn', 'btn-secondary', 'card-buttons');
            edit.textContent = 'Edit';
            cardBody.appendChild(edit);

            card.appendChild(cardBody);
            cardContainer.appendChild(card);
        });
    }

    renderCards(artistItems);
});
