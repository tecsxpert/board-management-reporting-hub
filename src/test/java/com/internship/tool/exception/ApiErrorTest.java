package com.internship.tool.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ApiErrorTest {

    @Test
    void apiErrorStoresAllValues() {
        ApiError error = new ApiError(
                404,
                "Not Found",
                "User not found",
                "/users/1"
        );

        assertNotNull(error.getTimestamp());
        assertEquals(404, error.getStatus());
        assertEquals("Not Found", error.getError());
        assertEquals("User not found", error.getMessage());
        assertEquals("/users/1", error.getPath());
    }
}