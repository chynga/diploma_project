package com.example.backend_with_jaxrs.dao;

import com.example.backend_with_jaxrs.models.Review;
import com.example.backend_with_jaxrs.utils.CustomException;
import com.example.backend_with_jaxrs.utils.ErrorCode;

import java.sql.*;

public class ReviewDAO {

    private static ReviewDAO INSTANCE;

    private Connection connection = null;
    private String dbConnectionUrl = "jdbc:postgresql://localhost:8081/diploma_project";
    private String dbUser = "postgres";
    private String dbPassword = "admin";

    private ReviewDAO() throws SQLException {
        connection = DriverManager.getConnection(dbConnectionUrl, dbUser, dbPassword);
    }

    public static ReviewDAO getInstance() throws CustomException {
        if(INSTANCE == null) {
            try {
                INSTANCE = new ReviewDAO();
            } catch (SQLException e) {
                throw new CustomException(e, ErrorCode.SQL);
            }
        }

        return INSTANCE;
    }

    public Review writeReview(Review review) throws CustomException {
        try {
            String sql = "INSERT INTO reviews (full_name, body, rating) " +
                    "VALUES (?, ?, ?)";

            PreparedStatement preparedStmt = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            preparedStmt.setString(1, review.getFullName());
            preparedStmt.setString(2, review.getBody());
            preparedStmt.setInt(3, review.getRating());

            return getReviewFromDb(preparedStmt);
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    private Review getReviewFromDb(PreparedStatement preparedStmt) throws CustomException {
        try {
            int affectedRows = preparedStmt.executeUpdate();
            if (affectedRows == 0) {
                throw new SQLException("Creating review failed, no rows affected.");
            }

            ResultSet generatedKeys = preparedStmt.getGeneratedKeys();
            Review review = new Review();

            if (generatedKeys.next()) {
                setReviewFields(generatedKeys, review);
            } else {
                throw new SQLException("Creating review failed, no ID obtained.");
            }

            return review;
        } catch (SQLException e) {
            throw new CustomException(e, ErrorCode.SQL);
        }
    }

    private void setReviewFields(ResultSet generatedKeys, Review review) throws SQLException {
        review.setId(generatedKeys.getInt("id"));
        review.setFullName(generatedKeys.getString("full_name"));
        review.setBody(generatedKeys.getString("body"));
        review.setRating(generatedKeys.getInt("rating"));
    }
}
