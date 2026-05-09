package com.internship.tool.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.internship.tool.entity.User;
import com.internship.tool.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class UserControllerTest {

    @Test
    void getAllUsersReturnsUsers() throws Exception {
        UserService us = mock(UserService.class);
        UserController uc = new UserController(us);
        MockMvc mvc = MockMvcBuilders.standaloneSetup(uc).build();

        User u = new User();
        u.setId(1L);
        u.setName("Yashwanth");
        u.setEmail("yash@test.com");

        when(us.getAllUsers()).thenReturn(List.of(u));

        mvc.perform(get("/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Yashwanth"))
                .andExpect(jsonPath("$[0].email").value("yash@test.com"));

        verify(us, times(1)).getAllUsers();
    }

    @Test
    void createUserReturnsSavedUser() throws Exception {
        UserService us = mock(UserService.class);
        UserController uc = new UserController(us);
        MockMvc mvc = MockMvcBuilders.standaloneSetup(uc).build();

        User input = new User();
        input.setName("Yashwanth");
        input.setEmail("yash@test.com");

        User saved = new User();
        saved.setId(1L);
        saved.setName("Yashwanth");
        saved.setEmail("yash@test.com");

        when(us.createUser(any(User.class))).thenReturn(saved);

        mvc.perform(post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(input)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Yashwanth"))
                .andExpect(jsonPath("$.email").value("yash@test.com"));

        verify(us, times(1)).createUser(any(User.class));
    }
}