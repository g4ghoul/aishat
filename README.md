# Aishat Alatishe - Personal Professional Website & Portfolio

A modern, responsive personal website and academic portfolio for **Aishat Alatishe**, a Protein Scientist, PhD Candidate, and Advocate.

## Features

- **Academic Portfolio**: Comprehensive list of publications with first-author highlighting.
- **Advocacy & Leadership**: Sections dedicated to unapologetic feminism, women in STEM, and graduate student welfare.
- **Dynamic Theming**: Support for Light and Dark modes with a theme switcher.
- **Responsive Design**: Optimized for all devices using Tailwind CSS and Framer Motion for smooth transitions.
- **Contact Integration**: Fully functional contact form with backend persistence.

## Tech Stack

### Frontend
- **React**: UI library for building the interface.
- **Vite**: Modern frontend build tool for fast development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn UI**: High-quality accessible components.
- **Framer Motion**: Library for production-ready animations.
- **Wouter**: Tiny and fast routing library.
- **TanStack Query**: For efficient data fetching and state management.

### Backend
- **Node.js & Express**: Backend server framework.
- **PostgreSQL**: Relational database for data persistence.
- **Drizzle ORM**: Type-safe ORM for database interactions.
- **Zod**: TypeScript-first schema validation.

## Setup & Development

### Prerequisites
- Node.js (v20+)
- PostgreSQL Database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Database Setup

1. Ensure your `DATABASE_URL` is set in your environment variables.
2. Push the schema to your database:
   ```bash
   npm run db:push
   ```

### Running the App

Start the development server (runs both frontend and backend):
```bash
npm run dev
```

The app will be available at `http://0.0.0.0:5000`.

## Project Structure

- `client/`: React frontend source code.
- `server/`: Express backend and database logic.
- `shared/`: Shared types and API route definitions.
- `attached_assets/`: User-provided resources and documents.
