# University Landing Pages Project

A modern, responsive full-stack web application featuring dynamic landing pages for two prestigious universities: **MAIT Delhi** and **VJTI Mumbai**.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)

## Project Overview

This project showcases two fully-featured Single Page Applications (SPAs) with:

- **Modern Responsive UI** - Seamless experience across all devices
- **Dynamic Content** - API-driven course fees and university data
- **Lead Generation** - Integrated form submissions via Pipedream webhook
- **Smooth Animations** - Enhanced UX with Framer Motion
- **RESTful Backend** - Express.js API for data management

### Featured Universities

1. **Maharaja Agrasen Institute of Technology (MAIT)** - Delhi
2. **Veermata Jijabai Technological Institute (VJTI)** - Mumbai

## Live Demo

- **Frontend**: [https://your-frontend.netlify.app](https://your-frontend.netlify.app)
- **Backend API**: [https://your-backend.onrender.com](https://your-backend.onrender.com)

### Routes

| Route   | Description                |
| ------- | -------------------------- |
| `/`     | Home - University Selector |
| `/mait` | MAIT Delhi Landing Page    |
| `/vjti` | VJTI Mumbai Landing Page   |

## Key Features

- **Modern UI/UX** - Clean, professional design with custom theming
- **Fully Responsive** - Mobile-first approach using TailwindCSS
- **Dynamic Fee Structure** - Real-time course fee data via API
- **Stats Dashboard** - University rankings, programs, and campus life
- **News Section** - Latest updates and announcements
- **Lead Form** - Seamless inquiry submission without page refresh
- **Smooth Animations** - Engaging transitions and interactions
- **SPA Architecture** - Fast navigation with React Router

## 🛠️ Tech Stack

### Frontend

- **React.js** (Vite) - Modern React framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **Lucide Icons** - Beautiful icon set
- **Fetch API** - AJAX requests

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-Origin Resource Sharing
- **JSON Data Storage** - Structured data files

### Integrations & Deployment

- **Pipedream** - Lead form webhook integration
- **Render** - Backend hosting
- **Netlify/Vercel** - Frontend deployment

## Project Structure

```
landing-pages-project/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── fees.controller.js
│   │   │   └── overview.controller.js
│   │   ├── routes/
│   │   │   ├── fees.routes.js
│   │   │   └── overview.routes.js
│   │   ├── data/
│   │   │   ├── fees.json
│   │   │   └── overview.json
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   │   ├── mait-logo.png
│   │   │   └── vjti-logo.png
│   │   ├── components/
│   │   │   ├── HeaderMAIT.jsx
│   │   │   ├── HeaderVJTI.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── CTASection.jsx
│   │   │   ├── FeesModal.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── University1Page.jsx
│   │   │   └── VJTIPage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── tailwind.config.js
│   ├── index.html
│   ├── package.json
│   └── README.md
│
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server
npm run dev
```

The backend API will be available at `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend app will be available at `http://localhost:5173`

## 📡 API Documentation

### Base URL

```
http://localhost:5000/api
```

### Endpoints

#### 1. Get University Overview

```http
GET /api/overview
```

**Response:**

```json
{
  "success": true,
  "data": {
    "university": "MAIT Delhi",
    "location": "Delhi, India",
    "ranking": 12,
    "established": 1999,
    "type": "Government"
  }
}
```

#### 2. Get Course Fees

```http
GET /api/fees
```

**Response:**

```json
{
  "success": true,
  "data": {
    "programs": [
      {
        "course": "Computer Science Engineering",
        "duration": "4 years",
        "min": 145000,
        "max": 165000,
        "currency": "INR"
      },
      {
        "course": "Electronics & Communication",
        "duration": "4 years",
        "min": 140000,
        "max": 160000,
        "currency": "INR"
      }
    ]
  }
}
```

## Lead Form Integration

### Pipedream Webhook Setup

1. Go to [Pipedream Sources](https://pipedream.com/sources)
2. Create new → **New Requests (Payload Only)**
3. Copy your webhook URL (e.g., `https://eo12345.m.pipedream.net`)
4. Update in `frontend/src/components/LeadForm.jsx`:

```javascript
const PIPEDREAM_URL = "https://eo12345.m.pipedream.net";

const handleSubmit = async (e) => {
  e.preventDefault();

  await fetch(PIPEDREAM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      timestamp: new Date().toISOString(),
    }),
  });
};
```

### Benefits

- No page refresh required
- Real-time lead capture
- Automatic logging in Pipedream dashboard
- Easy integration with CRM systems

## Code Highlights

### React Router Configuration

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mait" element={<University1Page />} />
        <Route path="/vjti" element={<VJTIPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### API Service Layer

```javascript
const API_BASE = "http://localhost:5000/api";

export const getOverview = async () => {
  const response = await fetch(`${API_BASE}/overview`);
  return response.json();
};

export const getFees = async () => {
  const response = await fetch(`${API_BASE}/fees`);
  return response.json();
};
```

### Dynamic Fees Modal

```javascript
const FeesModal = ({ isOpen, onClose }) => {
  const [fees, setFees] = useState([]);

  useEffect(() => {
    if (isOpen) {
      getFees().then(data => setFees(data.data.programs));
    }
  }, [isOpen]);

  return (
    // Modal JSX with fees data
  );
};
```

### Backend Controller (ES Modules)

```javascript
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getFees = (req, res) => {
  const filePath = path.join(__dirname, "../data/fees.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  res.json({ success: true, data: jsonData });
};
```

## Responsive Design

The application is fully responsive with:

- **Mobile Navigation** - Hamburger menu for small screens
- **Desktop Layout** - Optimized grid systems
- **Adaptive Typography** - Fluid font sizing
- **Touch-Friendly** - Large tap targets for mobile
- **Accessible** - WCAG 2.1 compliant

## 🚀 Deployment Guide

### Backend Deployment (Render)

1. Push your code to GitHub
2. Go to [Render Dashboard](https://render.com)
3. Click **New** → **Web Service**
4. Connect your repository
5. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
6. Deploy and copy the URL

### Frontend Deployment (Netlify)

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Frontend Deployment (Vercel)

```bash
# Deploy with Vercel CLI
vercel --prod
```

### Update API Base URL

After backend deployment, update `frontend/src/services/api.js`:

```javascript
const API_BASE = "https://your-backend.onrender.com/api";
```

## Application Flow

```
┌─────────────┐
│  Home Page  │
└──────┬──────┘
       │
       ├─────────────┐
       │             │
  ┌────▼────┐   ┌───▼────┐
  │  MAIT   │   │  VJTI  │
  └────┬────┘   └───┬────┘
       │            │
       ├─ Hero Section
       ├─ Stats & Programs
       ├─ Campus Life
       │
       ├─ "Check Fees" Button
       │       │
       │       └──► API Call (/api/fees)
       │               │
       │               └──► Fees Modal Display
       │
       ├─ Lead Form
       │       │
       │       └──► Pipedream Webhook
       │               │
       │               └──► Lead Captured
       │
       └─ Footer
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nishant Gupta**

- GitHub: [@nishant2253](https://github.com/nishant2253)

## Acknowledgments

- React.js Team for the amazing framework
- TailwindCSS for the utility-first CSS approach
- Pipedream for seamless webhook integration
- All contributors who helped improve this project

## Support

For support, email your-email@example.com or open an issue in the repository.

---

<div align="center">
  Made with  by Your Nishant Gupta
</div>
