# Space API

A simple RESTful API for space exploration data built with Node.js and Express. This project offers endpoints to retrieve information about planets and historical space missions.

---

## 📚 What I Learned

- **Project Structure & Modularization**: Organized code into `routes`, `controllers`, `data`, and `middlewares` for separation of concerns.
- **Routing with Express**: Created multiple HTTP GET routes, including parameterized routes (`:id`, `:type`) and query routes (`/search?q=`).
- **Controller Pattern**: Moved business logic into controller functions for cleaner route files.
- **Mock Data Management**: Stored sample data in separate modules (`data/planets.js`, `data/explorations.js`) and imported them.
- **Middleware Usage**: Utilized built-in middleware (`express.json()`) and custom 404 middleware for handling unknown routes.
- **Error Handling**: Returned appropriate HTTP status codes (200, 404, 400) and JSON error messages.
- **Environment Configuration**: Learned to load environment variables with `dotenv` for flexible configuration (`PORT`, etc.).
- **Version Control Best Practices**: Prepared `.gitignore`, wrote clear commit messages, and documented the project in `README.md`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js v14+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/space-api.git
cd space-api

# Install dependencies
npm install
```

### Configuration

Create a `.env` file in the root directory with the following content:

```ini
PORT=3000
```

### Running the Server

```bash
npm start
```

Server will start on `http://localhost:3000`.

---

## 🗂️ Folder Structure

```
space-api/
├── controllers/       # Route handlers and business logic
├── data/              # Mock data modules
├── middlewares/       # Custom middleware (404 handler, etc.)
├── routes/            # Express route definitions
├── .env               # Environment variables
├── server.js          # Application entry point
└── package.json       # Project metadata and scripts
```

---

## 📄 API Endpoints

- `GET /`

  - Welcome message and available endpoints.

- `GET /api/planets`

  - Retrieve all planets.

- `GET /api/planets/:id`

  - Retrieve a specific planet by ID.

- `GET /api/planets/type/:type`

  - Filter planets by type (e.g., Karasal, Gaz Devi).

- `GET /api/planets/random`

  - Get a random planet.

- `GET /api/explorations`

  - Retrieve all space missions.

- `GET /api/explorations/:id`

  - Retrieve a specific mission by ID.

- `GET /api/stats`

  - Get aggregated statistics about planets and missions.

- `GET /api/search?q=keyword`

  - Search planets and missions by keyword.

---

## ⚙️ Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for routing and middleware
- **dotenv** - Environment variable management

---
