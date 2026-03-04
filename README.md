# Steel Fab Company - MERN Stack Website

A modern MERN stack website for a steel fabrication and mechanical engineering company.

## Tech Stack

### Frontend
- React.js 18
- Tailwind CSS
- React Router v6
- Axios
- Framer Motion (animations)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies
│   └── vite.config.js     # Vite configuration
│
├── server/                 # Express backend
│   ├── config/            # Configuration files
│   ├── controllers/       # Route controllers
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── server.js         # Server entry point
│   └── package.json      # Backend dependencies
│
└── package.json           # Root package.json
```

## Features

- **7 Pages**: Home, Products, Services, Clients, Equipments, About, Contact
- **SEO Optimized**: Meta tags, sitemap, Open Graph
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Contact Form**: Stores submissions in MongoDB
- **REST APIs**: For clients, services, products, equipments
- **Security**: Helmet, CORS, rate limiting
- **Performance**: Lazy loading, code splitting

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm run install:all
```

3. Configure environment variables:

For server (create `server/.env`):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/steel-fab-company
FRONTEND_URL=http://localhost:5173
```

For client (create `client/.env`):
```env
VITE_API_URL=http://localhost:5000/api
```

4. Seed the database (optional):
```bash
npm run seed
```

5. Start development servers:
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Deployment

### Frontend (Vercel)
1. Build the client:
```bash
npm run build
```

2. Deploy the `client/dist` folder to Vercel

### Backend (Node.js Server)
1. Set environment variables on your hosting provider
2. Start the server:
```bash
npm start
```

### Environment Variables for Production

**Server:**
- `PORT`: Server port (e.g., 5000)
- `MONGODB_URI`: MongoDB connection string
- `FRONTEND_URL`: Your frontend URL
- `NODE_ENV`: production

**Client:**
- `VITE_API_URL`: Your backend API URL

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact | Submit contact form |
| GET | /api/clients | Get all clients |
| GET | /api/services | Get all services |
| GET | /api/products | Get all products |
| GET | /api/equipments | Get all equipment |

## Preserved URLs

The following URLs are preserved for SEO:
- `/` - Home
- `/products` - Products
- `/services` - Services
- `/clients` - Clients
- `/equipments` - Equipments
- `/about` - About Us
- `/contact` - Contact

## Security Features

- Helmet.js for HTTP headers
- CORS configuration
- Rate limiting (100 requests per 15 minutes)
- Input validation
- Error handling middleware

## License

ISC
