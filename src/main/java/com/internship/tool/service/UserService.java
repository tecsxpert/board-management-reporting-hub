package com.internship.tool.service;

import com.internship.tool.entity.User;
import com.internship.tool.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository ur;

    public UserService(UserRepository ur) {
        this.ur = ur;
    }

    public List<User> getAllUsers() {
        return ur.findAll();
    }

    public User createUser(User user) {
        return ur.save(user);
    }
}