# Prathiksha B - Portfolio Website

A premium, full-stack, animated personal portfolio website designed for Prathiksha B, a UI/UX Designer.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Icons**: Lucide React, React Icons

## Features
- **Antigravity Floating Icons**: A unique toolkit section with independent floating animations.
- **Premium Dark Theme**: Sleek near-black aesthetics with glassmorphism and subtle noise grain.
- **Animated Background**: Floating orbs, particle fields, and parallax effects.
- **Smooth Animations**: Letter-by-letter reveals, typewriter effects, and scroll-triggered reveals.
- **Contact Integration**: Fully functional contact form connected to a MongoDB backend.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB URI (local or Atlas)

### Installation

1. **Clone or download the project**
2. **Setup Backend**:
   - Navigate to `server/`
   - Create a `.env` file (one is provided, update your `MONGODB_URI`)
   - Run `npm install`
   - Run `npm run dev` (starts on http://localhost:5000)

3. **Setup Frontend**:
   - Navigate to `client/`
   - Run `npm install`
   - Run `npm run dev` (starts on http://localhost:5173)

## File Structure
```
/client
  /src
    /components   - UI Components (Hero, About, Skills, etc.)
    App.jsx        - Main Assembly
    index.css      - Global styles & design system
/server
  /models         - Mongoose Schemas
  /routes         - API Endpoints
  index.js        - Server entry point
```

## Customization
- **Colors**: Change colors in `client/tailwind.config.js` or `client/src/index.css`.
- **Content**: Update information in the respective components in `client/src/components/`.
