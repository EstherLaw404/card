# Card Distribution Project

This project simulates distributing a standard deck of 52 playing cards among a specified number of people.

It includes:

- **Frontend:** ReactJS (v16)
- **Backend:** PHP (served via Apache)
- **Containerized:** Docker + Docker Compose


---

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

> Works on Mac, Linux, and Windows (with Docker Desktop)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/card.git
cd card
```

2. Build and start the Docker containers:

```bash
docker-compose up -d
```

3. Access the services in your browser:
   
Frontend: http://localhost:3000

Backend API: http://localhost:5000/index.php?people=1

