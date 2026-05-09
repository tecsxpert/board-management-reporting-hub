\# Day 20 - DEMO CRUD Notes



\## Demo Focus



\- Problem statement

\- Architecture slide

\- Launch live tool

\- CRUD demonstration



\---



\## Pre-Demo Verification



| Check | Result |

|---|---|

| Docker containers | Started successfully |

| Backend health | UP after startup wait |

| AI service health | UP |

| Frontend | Working on http://localhost |

| Users API | Working |

| Seeded users count | 30 |



\---



\## Problem Statement



Management teams need a centralized tool to view important data, manage records, receive notifications, and access reports.



Without a single platform, reporting becomes manual, scattered, slow, and error-prone.



This project solves the problem by providing a full-stack reporting hub with backend APIs, frontend UI, database persistence, AI service integration, notifications, and Docker-based setup.



\---



\## Architecture Explained



\- React frontend is served through Nginx on port 80.

\- Spring Boot backend runs on port 8080.

\- PostgreSQL is used for persistent data storage.

\- Redis is included for caching support.

\- Python AI service runs separately on port 5000.

\- Docker Compose starts all services together.



\---



\## Live Tool Launch



Frontend URL:



```text

http://localhost

