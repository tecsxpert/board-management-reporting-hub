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

    @Scheduled(cron = "0 0 9 * * ?")
    public void dailyReminder() {
        System.out.println("Daily reminder scheduler running...");

        emailService.sendHtmlMail(
                "test@example.com",
                "Daily Reminder",
                "email/daily-reminder"
        );
    }

    @Scheduled(cron = "0 0 18 * * ?")
    public void deadlineAlert() {
        System.out.println("Deadline alert scheduler running...");

        emailService.sendHtmlMail(
                "test@example.com",
                "Deadline Alert",
                "email/deadline-alert"
        );
    }
}