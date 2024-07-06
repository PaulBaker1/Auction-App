
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getAuctionItems = () => {
    return axios.get(`${API_BASE_URL}/auctions/items`);
}

export const getAuctionItemById = (itemId) => {
    return axios.get(`${API_BASE_URL}/auctions/items/${itemId}`);
}

export const createBid = (itemId, bid) => {
    return axios.post(`${API_BASE_URL}/auctions/items/${itemId}/bids`, bid);
}