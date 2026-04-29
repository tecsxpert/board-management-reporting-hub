package com.internship.tool.scheduler;

import com.internship.tool.notification.EmailService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ReminderScheduler {

    private final EmailService emailService;

    public ReminderScheduler(EmailService emailService) {
        this.emailService = emailService;
    }

    @Scheduled(fixedRate = 60000)
    public void sendDailyReminder() {
        System.out.println("Scheduler running...");
        System.out.println("Sending email...");

        emailService.sendSimpleMail(
                "test@example.com",
                "Daily Reminder",
                "This is your daily reminder."
        );

        System.out.println("Email sent successfully");
    }
}