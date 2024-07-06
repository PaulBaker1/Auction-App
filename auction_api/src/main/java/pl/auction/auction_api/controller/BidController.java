package pl.auction.auction_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.auction.auction_api.model.AuctionItem;
import pl.auction.auction_api.model.Bid;
import pl.auction.auction_api.service.AuctionItemService;
import pl.auction.auction_api.service.BidService;

@RestController
@RequestMapping("/api/auctions/items/{itemId}/bids")
public class BidController {
    @Autowired
    private BidService bidService;
    @Autowired
    private AuctionItemService auctionItemService;

    @PostMapping
    public ResponseEntity<Bid> createBid(@PathVariable Long itemId, @RequestBody Bid bid) {
        bid.setAuctionItem(auctionItemService.getAuctionItemById(itemId)
                .orElseThrow(() -> new RuntimeException("Item not found")));
        Bid createdBid = bidService.createBid(bid);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdBid);
    }
}
