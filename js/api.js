// Set default configuration for Axios
const apiKey = 'live_8tvp85ZBQdhx18JPtqalIMIivvfethkkPIHUwtF0YgbipoeqUdOPVxP2D1XRaw0f';
const axiosInstance = axios.create({
    baseURL:  'https://api.thecatapi.com/v1',
    headers: { 'x-api-key': apiKey }
});

// Add request and response interceptors
axiosInstance.interceptors.request.use(config => {
    document.getElementById('progressBar').style.width = '0%';
    document.body.style.cursor = 'progress';
    console.log('Request started at:', new Date().toISOString(), 'URL:', config.url);
    return config;
}, error => {
    console.error('Request error:', error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    document.body.style.cursor = 'default';
    console.log('Response received at:', new Date().toISOString(), 'URL:', response.config.url);
    return response;
}, error => {
    document.body.style.cursor = 'default';
    console.error('Response error:', error);
    return Promise.reject(error);
});

// Function to get random cat image
export async function getRandomCat() {
    try {
        console.log('Fetching random cat...');
        const response = await axiosInstance.get('images/search');
        console.log('Random cat fetched:', response.data);
        return response.data[0];
    } catch (error) {
        console.error('Error fetching random cat:', error);
        throw error;
    }
}

// Function to get 10 random cat images
export async function getTenCats() {
    try {
        console.log('Fetching 10 random cats...');
        const response = await axiosInstance.get('images/search', {
            params: { limit: 10 }
        });
        console.log('10 random cats fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching 10 random cats:', error);
        throw error;
    }
}

