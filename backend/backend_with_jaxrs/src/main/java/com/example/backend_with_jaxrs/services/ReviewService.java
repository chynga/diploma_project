package com.example.backend_with_jaxrs.services;

import com.example.backend_with_jaxrs.dao.ReviewDAO;
import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.utils.CustomException;

public class ReviewService {
    private static ReviewService INSTANCE;

    private ReviewService() {}

    public static ReviewService getInstance() {
        if(INSTANCE == null) {
            INSTANCE = new ReviewService();
        }

        return INSTANCE;
    }

    public Review writeReview(Review review) throws CustomException {
        return ReviewDAO.getInstance().writeReview(review);
    }
}
