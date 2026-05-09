package com.internship.tool.scheduler;

import com.internship.tool.notification.EmailService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class ReminderSchedulerTest {

    @Test
    void dailyReminderSendsEmail() {
        EmailService emailService = mock(EmailService.class);
        ReminderScheduler scheduler = new ReminderScheduler(emailService);

        scheduler.dailyReminder();

        verify(emailService, times(1)).sendHtmlMail(
                "test@example.com",
                "Daily Reminder",
                "email/daily-reminder"
        );
    }

    @Test
    void deadlineAlertSendsEmail() {
        EmailService emailService = mock(EmailService.class);
        ReminderScheduler scheduler = new ReminderScheduler(emailService);

        scheduler.deadlineAlert();

        verify(emailService, times(1)).sendHtmlMail(
                "test@example.com",
                "Deadline Alert",
                "email/deadline-alert"
        );
    }
}