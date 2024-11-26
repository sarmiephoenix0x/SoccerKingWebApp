import axios from 'axios';

// Function to fetch events from the API
export const fetchEvents = async (page) => {
    const getAccessToken = async () => {
        return localStorage.getItem('accessToken'); // Example using localStorage
    };
    try {
        const accessToken = await getAccessToken();
        const response = await axios.get(`https://signal.payguru.com.ng/api/events?page=${page}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        console.log('API Response:', response.data); // Log the API response

        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error; // Rethrow the error for handling in the calling component
    }
};

// Function to search events based on a query
export const searchEvents = async (query) => {
    try {
        const response = await axios.get(`https://signal.payguru.com.ng/api/search?query=${query}`);
        return response.data; // Return the data from the response
    } catch (error) {
        console.error('Error searching events:', error);
        throw error; // Rethrow the error for handling in the calling component
    }
};