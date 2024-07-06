
import React, { useEffect, useState } from 'react';
import { getAuctionItemById } from '../services/api';
import { Card } from 'react-bootstrap';
import BidForm from './BidForm';

const AuctionItemDetail = ({ itemId }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (itemId) {
            getAuctionItemById(itemId).then(response => {
                setItem(response.data);
            });
        }
    }, [itemId]);

    const handleBidPlaced = () => {
        getAuctionItemById(itemId).then(response => {
            setItem(response.data);
        }).catch(error => {
            console.error('Error fetching auction item details:', error);
        });
    };

    if (!item) {
        return <div className="col-md-8">Select an item to see details</div>;
    }

    return (
        <div className="col-md-8">
            <Card>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>Starting Price: ${item.startingPrice}</Card.Text>
                    <BidForm itemId={item.id} onBidPlaced={handleBidPlaced} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default AuctionItemDetail;
