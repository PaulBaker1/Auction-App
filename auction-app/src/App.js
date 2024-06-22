import React, { useState } from 'react';
import AuctionItemList from './components/AuctionItemList';
import AuctionItemDetail from './components/AuctionItemDetail';
import { Container, Row } from 'react-bootstrap';

const App = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    return (
        <Container>
            <h1 className="my-4">Auction App</h1>
            <Row>
                <AuctionItemList onSelectItem={setSelectedItemId} />
                <AuctionItemDetail itemId={selectedItemId} />
            </Row>
        </Container>
    );
}

export default App;
