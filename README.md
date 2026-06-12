# DevOps ERP

A full-stack ERP (Enterprise Resource Planning) application built with the MERN stack, fully containerized and deployed on AWS using a complete DevOps pipeline.

---

## 🏗️ Architecture

This project demonstrates an end-to-end DevOps workflow — from local development to automated cloud deployment.

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│   Frontend   │────▶│   Backend    │────▶│   MongoDB     │
│   (React)    │     │ (Node/Express)│    │   Database    │
└─────────────┘     └─────────────┘     └──────────────┘
        │                    │
        └────────┬───────────┘
                  ▼
          ┌───────────────┐
          │ Docker Compose │
          └───────────────┘
                  │
                  ▼
     ┌────────────────────────┐
     │  GitHub Actions CI/CD   │
     └────────────────────────┘
                  │
                  ▼
       ┌───────────────────┐
       │ Terraform → AWS    │
       │ Kubernetes (k8s)   │
       └───────────────────┘
```

---

## 🛠️ Tech Stack

**Application**
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

**Infrastructure & DevOps**
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat&logo=terraform&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white)

---

## 📁 Project Structure

```
devops-erp/
├── .github/workflows/   # CI/CD pipeline definitions
├── backend/              # Express.js API server
├── frontend/             # React application
├── k8s/                  # Kubernetes manifests
├── terraform/            # AWS infrastructure as code
└── docker-compose.yml    # Local multi-container setup
```

---

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js (v18+)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/afaqxaman/devops-erp.git
cd devops-erp

# Start all services with Docker Compose
docker-compose up --build
```

The application will be available at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend API).

---

## ⚙️ CI/CD Pipeline

This repository uses **GitHub Actions** to automatically:
- Run tests on every push
- Build Docker images
- Push images to a container registry
- Deploy to AWS infrastructure

Pipeline configuration: [`.github/workflows`](.github/workflows)

---

## ☁️ Infrastructure (Terraform)

The `terraform/` directory provisions the AWS infrastructure required to run this application, including compute resources and networking.

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

---

## ☸️ Kubernetes Deployment

The `k8s/` directory contains manifests to deploy this application on a Kubernetes cluster.

```bash
kubectl apply -f k8s/
```

---

## 📌 Key DevOps Practices Demonstrated

- ✅ Containerization with Docker & Docker Compose
- ✅ Infrastructure as Code with Terraform
- ✅ Automated CI/CD with GitHub Actions
- ✅ Container orchestration with Kubernetes
- ✅ Cloud deployment on AWS

---

## 👤 Author

**Afaq Xaman**
DevOps Engineer | [LinkedIn](https://www.linkedin.com/in/afaq-zaman-776b15275/) | [GitHub](https://github.com/afaqxaman)
