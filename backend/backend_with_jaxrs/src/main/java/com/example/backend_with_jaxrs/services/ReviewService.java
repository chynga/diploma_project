package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ReviewDAO;
import com.example.backend_with_jaxrs.dao.UserDAO;
import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.models.User;
import com.example.backend_with_jaxrs.utils.CustomException;

import java.util.ArrayList;

public class ReviewService {
    private static ReviewService INSTANCE;

    private ReviewService() {}

    public static ReviewService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new ReviewService();
        }

        return INSTANCE;
    }

    public void writeReview(Review review) throws CustomException {
        ReviewDAO.getInstance().writeReview(review);
    }

    public ArrayList<Review> getReviews() throws CustomException {
        ArrayList<Review> reviews = ReviewDAO.getInstance().getReviews();
        User client;
        for (Review review : reviews) {
            client = UserDAO.getInstance().getUserById(review.getClientId());
            review.setClient(client);
        }

        return reviews;
    }

    public void deleteReview(Long id) throws CustomException {
        ReviewDAO.getInstance().deleteReview(id);
    }
}
