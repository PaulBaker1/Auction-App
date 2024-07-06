package pl.auction.auction_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import pl.auction.auction_api.model.Bid;
import pl.auction.auction_api.model.BidRepository;
import pl.auction.auction_api.service.dto.User;

import java.util.Optional;

@Service
public class BidService {

    @Autowired
    private BidRepository bidRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    public Bid createBid(Bid bid) {
        User user = Optional.ofNullable(restTemplate.getForObject("http://localhost:8081/api/users/" + bid.getUserId(), User.class))
                .orElseThrow(() -> new RuntimeException("User not found with id: " + bid.getUserId()));
        return bidRepository.save(bid);
    }
}
