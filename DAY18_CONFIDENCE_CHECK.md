\# Day 18 - Final Confidence Check



\## Details



\- Date: 07-05-2026

\- Target: Each member presents their 90-second section solo

\- Team Members Present:

\- Overall Status: Completed



\---



\## Pre-Demo Verification



| Check | Result |

|---|---|

| Backend health | UP |

| AI service health | UP |

| Frontend running | Working on http://localhost |

| Users API working | Working |

| Seeded users count = 30 | Verified |

| Docker containers running | Verified |



\---



\## Commands Verified



```powershell

docker-compose down -v

docker-compose up --build -d



Invoke-RestMethod http://localhost:8080/actuator/health

Invoke-RestMethod http://localhost:5000/health

Invoke-WebRequest http://localhost -UseBasicParsing

(Invoke-RestMethod http://localhost:8080/users).Count

