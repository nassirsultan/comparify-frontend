# Comparify - Document Comparison App

A full-stack document comparison application that uses **Cosine Similarity** to measure how similar two text documents are.

## 🚀 Features

- Upload two `.txt` files via click or drag & drop
- Cosine similarity algorithm for accurate document comparison
- Real-time similarity score with animated result
- File type validation (frontend & backend)
- Loading spinner during comparison
- Error handling for network and file issues

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS

**Backend**
- Java 11
- Spring Boot
- REST API

## 📦 Getting Started

### Prerequisites
- Node.js
- Java 11+
- Maven

### Run Frontend
```bash
npm install
npm run dev
```

### Run Backend
```bash
cd comparify-backend
mvn spring-boot:run
```

## 🔗 API

`POST /api/compare`
- Accepts two `.txt` files as `multipart/form-data`
- Returns similarity score as JSON

## 📸 Screenshot
<img width="1389" height="935" alt="image" src="https://github.com/user-attachments/assets/9a5d6e96-d0e6-4136-af8e-6ecbed71df72" />

## 👨‍💻 Author
Nassir Sultan
