// Set default configuration for Axios
const apiKey = 'live_gX1HxvSUmfxYLKeNjJ6xdzgpPoT05X0HNM3HEWVv79s5Iik7X0f50rwlMB43RVY3';
const axiosInstance = axios.create({
    baseURL: 'https://api.thedogapi.com/v1/',
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

// Function to get random dog image
export async function getRandomDog() {
    try {
        console.log('Fetching random dog...');
        const response = await axiosInstance.get('images/search');
        console.log('Random dog fetched:', response.data);
        return response.data[0];
    } catch (error) {
        console.error('Error fetching random dog:', error);
        throw error;
    }
}

// Function to get 10 random dog images
export async function getTenDogs() {
    try {
        console.log('Fetching 10 random dogs...');
        const response = await axiosInstance.get('images/search', {
            params: { limit: 10 }
        });
        console.log('10 random dogs fetched:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching 10 random dogs:', error);
        throw error;
    }
}

