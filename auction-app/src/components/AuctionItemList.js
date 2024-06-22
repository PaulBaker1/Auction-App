import React, { useEffect, useState } from 'react';
import { getAuctionItems } from '../services/api';
import { ListGroup, Badge } from 'react-bootstrap';

const AuctionItemList = ({ onSelectItem }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchAuctionItems();
    }, []);

    const fetchAuctionItems = () => {
        getAuctionItems().then(response => {
            setItems(response.data);
        }).catch(error => {
            console.error('Error fetching auction items:', error);
        });
    };

    const handleBidPlaced = () => {
        fetchAuctionItems();
    };

    return (
        <div className="col-md-4">
            <h2>Auction Items</h2>
            <ListGroup>
                {items.map(item => (
                    <ListGroup.Item key={item.id} action onClick={() => onSelectItem(item.id)}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                {item.name} - ${item.startingPrice}
                            </div>
                            <div>
                                <Badge pill variant="info">
                                    {item.bidsCount} Bids
                                </Badge>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default AuctionItemList;
