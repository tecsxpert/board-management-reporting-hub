package com.internship.tool.controller;

import com.internship.tool.entity.User;
import com.internship.tool.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService us;

    public UserController(UserService us) {
        this.us = us;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return us.getAllUsers();
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return us.createUser(user);
    }
}