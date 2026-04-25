package com.internship.tool;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public List<UserDTO> getAllUsers() {
        return repo.findAll()
                .stream()
                .map(u -> new UserDTO(u.getId(), u.getName(), u.getEmail()))
                .toList();
    }

    public User createUser(User user) {
        return repo.save(user);
    }

    public User updateUser(Long id, User user) {
        User u = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        u.setName(user.getName());
        u.setEmail(user.getEmail());

        return repo.save(u);
    }

    public String deleteUser(Long id) {
        if (!repo.existsById(id)) {
            throw new RuntimeException("User not found with id: " + id);
        }

        repo.deleteById(id);
        return "User deleted successfully";
    }
}