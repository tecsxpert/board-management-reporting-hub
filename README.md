# Board \& Management Reporting Hub

\# Board and Management Reporting Hub



\## Overview



Board and Management Reporting Hub is a full-stack application built to support reporting, user management, notifications, and service integration for board/management-level workflows.



This project includes:



\- Spring Boot backend

\- React frontend

\- Python AI service

\- PostgreSQL database

\- Redis service

\- Docker Compose based local setup

\- Email notification support

\- Data seeding

\- Backend test coverage with JaCoCo



\---



\## Architecture Diagram



```text

+-------------------+

|     Frontend      |

|   React + Vite    |

|   Port: 80        |

+---------+---------+

&#x20;         |

&#x20;         | HTTP

&#x20;         v

+-------------------+

|      Backend      |

|   Spring Boot     |

|   Port: 8080      |

+----+---------+----+

&#x20;    |         |

&#x20;    |         |

&#x20;    v         v

+---------+   +---------+

|Postgres |   | Redis   |

|Port 5432|   |Port 6379|

+---------+   +---------+



&#x20;         |

&#x20;         | HTTP

&#x20;         v

+-------------------+

|    AI Service     |

|   Python Flask    |

|   Port: 5000      |

+-------------------+

