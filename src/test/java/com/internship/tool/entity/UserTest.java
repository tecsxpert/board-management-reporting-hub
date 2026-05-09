package com.internship.tool.entity;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {

    @Test
    void userGettersAndSettersWork() {
        User u = new User();

        u.setId(1L);
        u.setName("Yashwanth");
        u.setEmail("yash@test.com");

        assertEquals(1L, u.getId());
        assertEquals("Yashwanth", u.getName());
        assertEquals("yash@test.com", u.getEmail());
    }

    @Test
    void onCreateSetsCreatedAtAndUpdatedAt() {
        User u = new User();

        u.onCreate();

        assertNotNull(u.getCreatedAt());
        assertNotNull(u.getUpdatedAt());
    }

    @Test
    void onUpdateSetsUpdatedAt() {
        User u = new User();

        u.onUpdate();

        assertNotNull(u.getUpdatedAt());
    }
}