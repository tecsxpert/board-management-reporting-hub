package com.internship.tool.security;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SecurityConfigTest {

    @Test
    void securityConfigObjectCanBeCreated() {
        SecurityConfig sc = new SecurityConfig();
        assertNotNull(sc);
    }
}