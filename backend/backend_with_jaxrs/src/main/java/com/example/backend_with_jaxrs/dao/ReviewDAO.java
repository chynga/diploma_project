package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.models.Service;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;
import java.util.ArrayList;

public class ReviewDAO extends GeneralDAO {
    private static ReviewDAO INSTANCE;

    private ReviewDAO() throws CustomException {
        super();
    }

    public static ReviewDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            INSTANCE = new ReviewDAO();
        }

        return INSTANCE;
    }

    public ArrayList<Review> getReviews() throws CustomException {
        String sqlScript = "SELECT * FROM reviews";
        PreparedStatement preparedStatement = getPreparedStatement(sqlScript);
        ResultSet resultSet = executeQuery(preparedStatement);

        return getReviewsFromDb(resultSet);
    }

    public void writeReview(Review review) throws CustomException {
        String sql = "INSERT INTO reviews (client_id, body, rating) " +
                "VALUES (?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sql);
        setSqlScriptData(preparedStatement, review);
        executeUpdate(preparedStatement);
    }

    public void deleteReview(Long id) throws CustomException {
        String sql = "DELETE FROM reviews WHERE id = (?)";
        PreparedStatement preparedStatement = getPreparedStatement(sql);
        setSqlScriptData(preparedStatement, id);
        executeUpdate(preparedStatement);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Review review) throws CustomException {
        try {
            preparedStatement.setLong(1, review.getClientId());
            preparedStatement.setString(2, review.getBody());
            preparedStatement.setInt(3, review.getRating());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Long id) throws CustomException {
        try {
            preparedStatement.setLong(1, id);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
        }
    }

    private ArrayList<Review> getReviewsFromDb(ResultSet resultSet) throws CustomException {
        try {
            ArrayList<Review> reviews = new ArrayList<>();
            while (resultSet.next()) {
                Review review = new Review();
                setReviewFields(resultSet, review);
                reviews.add(review);
            }

            return reviews;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_REVIEWS);
        }
    }

    private Review getReviewFromDb(ResultSet resultSet) throws CustomException {
        try {
            Review review = new Review();
            if (resultSet.next()) {
                setReviewFields(resultSet, review);
            } else {
                throw new CustomException(ErrorCode.SQL_REVIEW_NOT_FOUND);
            }

            return review;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_GET_REVIEW);
        }
    }

    private void setReviewFields(ResultSet resultSet, Review review) throws CustomException {
        try {
            review.setId(resultSet.getLong("id"));
            review.setClientId(resultSet.getLong("client_id"));
            review.setBody(resultSet.getString("body"));
            review.setRating(resultSet.getInt("rating"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_REVIEW_FIELDS);
        }
    }
}
