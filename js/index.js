import { getRandomCat, getTenCats } from './api.js';
import { updateProgress } from './utils.js';

// Event handler for getting a random cat image
document.getElementById('getRandomCatBtn').addEventListener('click', async () => {
    console.log('Get Random Cat button clicked');
    try {
        const cat = await getRandomCat();
        console.log('Displaying random cat:', cat);
        displayCat([cat]);
    } catch (error) {
        console.error('Error fetching random cat:', error);
    }
});

// Event handler for getting 10 random cat images
document.getElementById('getTenCatsBtn').addEventListener('click', async () => {
    console.log('Get 10 Cats button clicked');
    try {
        const cats = await getTenCats();
        console.log('Displaying 10 cats:', cats);
        displayCat(cats);
    } catch (error) {
        console.error('Error fetching 10 random cats:', error);
    }
});

// Function to display cat images
function displayCat(cats) {
    const catContainer = document.getElementById('catContainer');
    catContainer.innerHTML = ''; // Clear existing content

    cats.forEach(cat => {
        const imgElement = document.createElement('img');
        imgElement.src = cat.url;
        imgElement.alt = 'Cat Image';
        imgElement.className = 'cat-item';
        catContainer.appendChild(imgElement);
        console.log('Cat image added to container:', cat.url);
    });
}



