function getArtistName(name) {
    const getName = new URLSearchParams(window.location.search);
    return getName.get(name);
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

function getTotalItemsSold(artistName) {
    let totalItems = 0;
    let totalPublishedItems = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.artist === artistName) {
            totalPublishedItems++;
            if (item.dateSold) {
                totalItems++;
            }
        }
    }
    return `${totalItems}/${totalPublishedItems}`;
}

function getTotalIncome(artistName) {
    let totalIncome = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.artist === artistName && item.dateSold) {
            totalIncome += item.priceSold;
        }
    }
    return `${totalIncome} $`;
}

const totalItemsSoldElement = document.getElementById('totalItemsSold');
if (totalItemsSoldElement) {
    totalItemsSoldElement.textContent = `Total Items Sold: ${getTotalItemsSold(artistName)}`;
}

const totalIncomeElement = document.getElementById('totalIncome');
if (totalIncomeElement) {
    totalIncomeElement.textContent = `Total Income: ${getTotalIncome(artistName)}`;
}



const chartContainer = document.getElementById('chart');

const myItems = items.filter(item => item.artist === artistName);

const soldItems = myItems.filter(
    (item) => item.priceSold !== null && item.dateSold !== null
);

const soldDate = soldItems.map(item => {
    const formattedDate = new Date(item.dateSold);
    return formattedDate.toDateString();
});
const soldPrices = soldItems.map((item) => item.priceSold);
const originalPrice = soldItems.map((item) => item.price);

const charConfig = {
    type: 'bar',
    data: {
        labels: soldDate, //x-axis
        datasets: [
            {
                backgroundColor: '#A16A5E',
                label: 'Price Sold',
                borderWidth: 4,
                data: soldPrices, // y-axis
            },
            {
                backgroundColor: '#EDD5BB',
                label: 'Original Price',
                borderWidth: 4,
                data: originalPrice, // y-axis
            },
        ],
    },
    options: {
        indexAxis: 'y',
    },
}; 

new Chart(chartContainer, charConfig);





