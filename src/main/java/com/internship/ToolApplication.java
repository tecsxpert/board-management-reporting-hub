package com.internship;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.internship")
public class ToolApplication {
    public static void main(String[] args) {
        SpringApplication.run(ToolApplication.class, args);
    }
}