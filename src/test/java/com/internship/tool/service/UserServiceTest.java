package com.internship.tool.service;

import com.internship.tool.entity.User;
import com.internship.tool.repository.UserRepository;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class UserServiceTest {

    @Test
    void getAllUsersReturnsUsers() {
        UserRepository ur = mock(UserRepository.class);
        UserService us = new UserService(ur);

        User u = new User();
        u.setId(1L);
        u.setName("Yashwanth");
        u.setEmail("yash@test.com");

        when(ur.findAll()).thenReturn(List.of(u));

        List<User> result = us.getAllUsers();

        assertEquals(1, result.size());
        assertEquals("Yashwanth", result.get(0).getName());
        verify(ur, times(1)).findAll();
    }

    @Test
    void createUserSavesUser() {
        UserRepository ur = mock(UserRepository.class);
        UserService us = new UserService(ur);

        User input = new User();
        input.setName("Yashwanth");
        input.setEmail("yash@test.com");

        User saved = new User();
        saved.setId(1L);
        saved.setName("Yashwanth");
        saved.setEmail("yash@test.com");

        when(ur.save(input)).thenReturn(saved);

        User result = us.createUser(input);

        assertEquals(1L, result.getId());
        assertEquals("Yashwanth", result.getName());
        assertEquals("yash@test.com", result.getEmail());
        verify(ur, times(1)).save(input);
    }
}