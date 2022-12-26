package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;

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

    public Review writeReview(Review review) throws CustomException {
        String sql = "INSERT INTO reviews (full_name, body, rating) " +
                "VALUES (?, ?, ?)";
        PreparedStatement preparedStatement = getPreparedStatement(sql);
        setSqlScriptData(preparedStatement, review);
        executeUpdate(preparedStatement);
        ResultSet resultSet = getResultSet(preparedStatement);

        return getReviewFromDb(resultSet);
    }

    private void setSqlScriptData(PreparedStatement preparedStatement, Review review) throws CustomException {
        try {
            preparedStatement.setString(1, review.getFullName());
            preparedStatement.setString(2, review.getBody());
            preparedStatement.setInt(3, review.getRating());
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_SCRIPT_DATA);
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
            review.setFullName(resultSet.getString("full_name"));
            review.setBody(resultSet.getString("body"));
            review.setRating(resultSet.getInt("rating"));
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL_SET_REVIEW_FIELDS);
        }
    }
}
