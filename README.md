# LawyerAI

**AI-Powered Legal Assistant & Workflow Platform** for legal Q&A, community knowledge sharing, and moderation operations.

Dockerized full-stack architecture with production-ready service composition (Nginx, frontend, API, queue, scheduler).

## 🔗 Quick Links

| Resource | URL |
| --- | --- |
| Live Demo | [https://lawyerai.click](https://lawyerai.click) |
| Frontend Repo | [https://github.com/lethanhdat1567/lawerAI-UI](https://github.com/lethanhdat1567/lawerAI-UI) |
| Backend Repo | [https://github.com/lethanhdat1567/Lawer-api](https://github.com/lethanhdat1567/Lawer-api) |

## 🚀 Setup & Deployment

```bash
git clone <your-lawyerai-monorepo-url>
cd lawyerai
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
docker compose --env-file ./frontend/.env -f docker-compose.prod.yml up -d --build
```

## 🛠 Architecture

- `Nginx` as reverse proxy and TLS entrypoint.
- `Frontend` (Next.js) containerized for deterministic builds and runtime parity.
- `Backend` API containerized with dedicated queue and scheduler workers.
- `Docker Compose` orchestrates networking, service startup, and environment wiring.
