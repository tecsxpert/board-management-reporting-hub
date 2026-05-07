\# Day 19 - DEMO Notes



\## Demo Details



\- Date: 07-05-2026

\- Demo Target: Dashboard KPIs, search/filter, CSV export, audit log, email notification, responsive view

\- Status: Completed



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



\## Commands Verified



```powershell

docker-compose down -v

docker-compose up --build -d

Start-Sleep -Seconds 45



docker ps

Invoke-RestMethod http://localhost:8080/actuator/health

Invoke-RestMethod http://localhost:5000/health

Invoke-WebRequest http://localhost -UseBasicParsing

(Invoke-RestMethod http://localhost:8080/users).Count

