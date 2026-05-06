package com.internship.tool.security;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class JwtUtilTest {

    @Test
    void generateTokenAndExtractUsernameWorks() {
        JwtUtil jwtUtil = new JwtUtil();

        String token = jwtUtil.generateToken("yashwanth");

        assertNotNull(token);
        assertEquals("yashwanth", jwtUtil.extractUsername(token));
    }

    @Test
    void tokenIsValidForCorrectUsername() {
        JwtUtil jwtUtil = new JwtUtil();

        String token = jwtUtil.generateToken("yashwanth");

        assertTrue(jwtUtil.isTokenValid(token, "yashwanth"));
    }

    @Test
    void tokenIsInvalidForWrongUsername() {
        JwtUtil jwtUtil = new JwtUtil();

        String token = jwtUtil.generateToken("yashwanth");

        assertFalse(jwtUtil.isTokenValid(token, "wronguser"));
    }
}