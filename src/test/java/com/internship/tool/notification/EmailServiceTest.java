package com.internship.tool.notification;

import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.mail.javamail.JavaMailSender;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

class EmailServiceTest {

    private JavaMailSender mailSender;
    private TemplateEngine templateEngine;
    private EmailService emailService;

    @BeforeEach
    void setUp() {
        mailSender = mock(JavaMailSender.class);
        templateEngine = mock(TemplateEngine.class);
        emailService = new EmailService(mailSender, templateEngine);
    }

    @Test
    void sendHtmlMail_shouldCreateMimeMessage() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder");

        verify(mailSender, times(1)).createMimeMessage();
    }

    @Test
    void sendHtmlMail_shouldProcessTemplate() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder");

        verify(templateEngine, times(1))
                .process(eq("email/daily-reminder"), any(Context.class));
    }

    @Test
    void sendHtmlMail_shouldSendEmail() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder");

        verify(mailSender, times(1)).send(message);
    }

    @Test
    void sendHtmlMail_shouldNotThrowExceptionOnSuccess() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        assertDoesNotThrow(() ->
                emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder")
        );
    }

    @Test
    void sendHtmlMail_shouldHandleTemplateFailure() {
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenThrow(new RuntimeException("Template error"));

        assertDoesNotThrow(() ->
                emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder")
        );

        verify(mailSender, never()).send(any(MimeMessage.class));
    }

    @Test
    void sendHtmlMail_shouldHandleCreateMessageFailure() {
        when(mailSender.createMimeMessage())
                .thenThrow(new RuntimeException("Create message failed"));

        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        assertDoesNotThrow(() ->
                emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder")
        );

        verify(mailSender, never()).send(any(MimeMessage.class));
    }

    @Test
    void sendHtmlMail_shouldHandleMailSenderFailure() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        doThrow(new RuntimeException("Mail sending failed"))
                .when(mailSender)
                .send(message);

        assertDoesNotThrow(() ->
                emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder")
        );

        verify(mailSender, times(1)).send(message);
    }

    @Test
    void sendHtmlMail_shouldUseDeadlineAlertTemplate() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/deadline-alert"), any(Context.class)))
                .thenReturn("<h1>Deadline Alert</h1>");

        emailService.sendHtmlMail("test@example.com", "Deadline Alert", "email/deadline-alert");

        verify(templateEngine).process(eq("email/deadline-alert"), any(Context.class));
    }

    @Test
    void sendHtmlMail_shouldCreateContext() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        emailService.sendHtmlMail("test@example.com", "Daily Reminder", "email/daily-reminder");

        ArgumentCaptor<Context> contextCaptor = ArgumentCaptor.forClass(Context.class);
        verify(templateEngine).process(eq("email/daily-reminder"), contextCaptor.capture());

        assertNotNull(contextCaptor.getValue());
    }

    @Test
    void sendHtmlMail_shouldWorkWithDifferentRecipient() {
        MimeMessage message = new MimeMessage((Session) null);

        when(mailSender.createMimeMessage()).thenReturn(message);
        when(templateEngine.process(eq("email/daily-reminder"), any(Context.class)))
                .thenReturn("<h1>Hello</h1>");

        emailService.sendHtmlMail("another@example.com", "Daily Reminder", "email/daily-reminder");

        verify(mailSender, times(1)).send(message);
    }
}