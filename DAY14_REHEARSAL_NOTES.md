\# Day 14 - Demo Rehearsal 1 Notes



\## Rehearsal Details



\- Date: 06-05-2026

\- Team Members Present:

\- Total Time Taken:

\- Target Time: 6 minutes



\---



\## Verified Before Demo



\- Backend health: UP

\- AI service health: UP

\- Frontend: Working on http://localhost

\- Users API: Working

\- Seeded users count: 30



\---



\## Demo Flow Checklist



| Section | Owner | Target Time | Actual Time | Status |

|---|---|---:|---:|---|

| Introduction |  | 40 sec |  |  |

| Architecture |  | 50 sec |  |  |

| Backend Explanation | Yashwanth | 60 sec |  |  |

| Live Demo |  | 60 sec |  |  |

| Testing \& Coverage |  | 60 sec |  |  |

| Docker \& README |  | 50 sec |  |  |

| Conclusion |  | 40 sec |  |  |



\---



\## Issues Found



| No. | Issue | Type | Owner | Priority | Fixed? |

|---:|---|---|---|---|---|

| 1 | Actuator health failed once during startup, worked after retry | Backend / Startup timing | Yashwanth | Low | Yes |

| 2 |  |  |  |  |  |

| 3 |  |  |  |  |  |



\---



\## Commands Verified



```powershell

docker-compose down -v

docker-compose up --build -d

docker ps

Invoke-RestMethod http://localhost:8080/actuator/health

Invoke-RestMethod http://localhost:5000/health

Invoke-WebRequest http://localhost -UseBasicParsing

Invoke-RestMethod http://localhost:8080/users

(Invoke-RestMethod http://localhost:8080/users).Count

.\\mvnw.cmd clean test

cd frontend

npm run build

cd ..

