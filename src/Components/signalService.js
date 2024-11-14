// signalService.js
import axios from 'axios';

const API_URL = 'https://signal.payguru.com.ng/api/signal';

export const fetchSignals = async (type, page = 1) => {
  const accessToken = localStorage.getItem('accessToken'); // Assuming you're storing the token in localStorage
  try {
    const response = await axios.get(`${API_URL}?type=${type}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to load signals');
    }
    throw new Error('Network error');
  }
};