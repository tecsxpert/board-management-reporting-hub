package com.internship.tool.exception;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CustomExceptionTest {

    @Test
    void badRequestExceptionStoresMessage() {
        BadRequestException ex = new BadRequestException("Invalid input");

        assertEquals("Invalid input", ex.getMessage());
    }

    @Test
    void resourceNotFoundExceptionStoresMessage() {
        ResourceNotFoundException ex = new ResourceNotFoundException("User not found");

        assertEquals("User not found", ex.getMessage());
    }
}