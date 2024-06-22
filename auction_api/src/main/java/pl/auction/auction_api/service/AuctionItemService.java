package pl.auction.auction_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.auction.auction_api.model.AuctionItem;
import pl.auction.auction_api.model.AuctionItemRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AuctionItemService {

    @Autowired
    private AuctionItemRepository auctionItemRepository;

    public List<AuctionItem> getAllAuctionItems() {
        List<AuctionItem> items = auctionItemRepository.findAll();
        for (AuctionItem item : items) {
            item.setBidsCount(item.getBids().size());
        }
        return items;
    }

    public Optional<AuctionItem> getAuctionItemById(Long id) {
        Optional<AuctionItem> item = auctionItemRepository.findById(id);
        item.ifPresent(auctionItem -> auctionItem.setBidsCount(auctionItem.getBids().size()));
        return item;
    }

    public AuctionItem addAuctionItem(AuctionItem auctionItem) {
        return auctionItemRepository.save(auctionItem);
    }

    public AuctionItem updateAuctionItem(Long id, AuctionItem auctionItemDetails) {
        AuctionItem auctionItem = auctionItemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
        auctionItem.setName(auctionItemDetails.getName());
        auctionItem.setDescription(auctionItemDetails.getDescription());
        auctionItem.setStartingPrice(auctionItemDetails.getStartingPrice());
        return auctionItemRepository.save(auctionItem);
    }

    public void deleteAuctionItem(Long id) {
        AuctionItem auctionItem = auctionItemRepository.findById(id).orElseThrow(() -> new RuntimeException("Item not found"));
        auctionItemRepository.delete(auctionItem);
    }
}