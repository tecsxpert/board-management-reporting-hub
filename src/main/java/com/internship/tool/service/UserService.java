package com.internship.tool.service;

import com.internship.tool.entity.User;
import com.internship.tool.exception.DuplicateEmailException;
import com.internship.tool.exception.InvalidInputException;
import com.internship.tool.exception.UserNotFoundException;
import com.internship.tool.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        validateUser(user);

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new DuplicateEmailException("Email already exists: " + user.getEmail());
        }

        return userRepository.save(user);
    }

    public Page<User> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public User getUserById(Long id) {
        if (id == null || id <= 0) {
            throw new InvalidInputException("Invalid user id");
        }

        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
    }

    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }

    private void validateUser(User user) {
        if (user == null) {
            throw new InvalidInputException("User cannot be null");
        }

        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new InvalidInputException("Name cannot be empty");
        }

        if (user.getEmail() == null || user.getEmail().trim().isEmpty()) {
            throw new InvalidInputException("Email cannot be empty");
        }

        if (!user.getEmail().contains("@")) {
            throw new InvalidInputException("Email should be valid");
        }
    }
}