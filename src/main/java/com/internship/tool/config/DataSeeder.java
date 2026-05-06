package com.internship.tool.config;

import com.internship.tool.entity.User;
import com.internship.tool.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        if (userRepository.count() > 0) {
            System.out.println("Data already seeded. Skipping...");
            return;
        }

        for (int i = 1; i <= 30; i++) {
            User user = new User();
            user.setName("Demo User " + i);
            user.setEmail("demo" + i + "@example.com");
            userRepository.save(user);
        }

        System.out.println("Seeded 30 demo users successfully.");
    }
}