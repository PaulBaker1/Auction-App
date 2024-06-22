import React, { useState } from 'react';
import { createBid } from '../services/api';
import { Form, Button } from 'react-bootstrap';

const BidForm = ({ itemId, onBidPlaced }) => {
    const [amount, setAmount] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createBid(itemId, { amount, userId })
            .then(response => {
                alert('Bid placed successfully!');
                setAmount('');
                setUserId('');
                onBidPlaced();
            })
            .catch(error => {
                alert('Failed to place bid');
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBidAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter bid amount"
                />
            </Form.Group>
            <Form.Group controlId="formUserId">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter user ID"
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Place Bid
            </Button>
        </Form>
    );
}

export default BidForm;
