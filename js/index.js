import { getRandomDog, getTenDogs } from './api.js';
import { updateProgress } from './utils.js';

// Event handler for getting a random dog image
document.getElementById('getRandomDogBtn').addEventListener('click', async () => {
    console.log('Get Random Dog button clicked');
    try {
        const dog = await getRandomDog();
        console.log('Displaying random dog:', dog);
        displayDog([dog]);
    } catch (error) {
        console.error('Error fetching random dog:', error);
    }
});

// Event handler for getting 10 random dog images
document.getElementById('getTenDogsBtn').addEventListener('click', async () => {
    console.log('Get 10 Dogs button clicked');
    try {
        const dogs = await getTenDogs();
        console.log('Displaying 10 dogs:', dogs);
        displayDog(dogs);
    } catch (error) {
        console.error('Error fetching 10 random dogs:', error);
    }
});

// Function to display dog images
function displayDog(dogs) {
    const dogContainer = document.getElementById('dogContainer');
    dogContainer.innerHTML = ''; // Clear existing content

    dogs.forEach(dog => {
        const imgElement = document.createElement('img');
        imgElement.src = dog.url;
        imgElement.alt = 'Dog Image';
        imgElement.className = 'dog-item';
        dogContainer.appendChild(imgElement);
        console.log('Dog image added to container:', dog.url);
    });
}



