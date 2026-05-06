package com.internship.tool;

import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import org.springframework.boot.SpringApplication;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ToolApplicationTest {

    @Test
    void applicationClassCanBeCreated() {
        ToolApplication app = new ToolApplication();
        assertNotNull(app);
    }

    @Test
    void mainRunsSpringApplication() {
        try (MockedStatic<SpringApplication> mocked = mockStatic(SpringApplication.class)) {
            String[] args = {};
            ToolApplication.main(args);

            mocked.verify(() -> SpringApplication.run(ToolApplication.class, args));
        }
    }
}