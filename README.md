# Main App - Host Application

The main application serves as the host/container for the music library micro frontend. It handles authentication, routing, and dynamically loads the music library micro frontend.

## 🏗️ Architecture Role

This application is the **host application** in the micro frontend architecture:

- **Authentication System**: Manages user login/logout and role-based access
- **Routing**: Handles application navigation and protected routes
- **Module Federation Host**: Dynamically loads the music library micro frontend
- **Layout Management**: Provides the main application shell and navigation

## 🚀 How to Run Locally

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5174`

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🔐 Authentication System

### Demo Credentials

**Admin Account:**

- Username: `admin`
- Password: `admin123`
- Permissions: Full access to add, edit, and delete songs

**User Account:**

- Username: `user`
- Password: `user123`
- Permissions: Read-only access to browse and filter songs

### Authentication Flow

1. **Login Page**: Users are redirected to `/login` if not authenticated
2. **Credential Validation**: System validates against hardcoded demo credentials
3. **Role Assignment**: Admin or user role assigned based on credentials
4. **Session Storage**: User data stored in localStorage
5. **Route Protection**: Protected routes check authentication status

## 🚀 Deployment to Vercel

### Automatic Deployment

The application is configured for automatic deployment on Vercel:

1. **Repository Connection**: Connected to GitHub repository
2. **Framework Detection**: Vercel automatically detects Vite configuration
3. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 🚀 Deployment to Netlify

### Current Deployment

The application is currently deployed on **Netlify**:

- **Live URL**: `https://vocal-speculoos-d47519.netlify.app/login`
- **Repository**: ``

### Environment Variables

No environment variables are required for this demo application.

## 🔧 Technical Details

### Module Federation Configuration

The application is configured as a **host** in the Module Federation setup:

```javascript
federation({
  name: "main-app",
  remotes: {
    "music-library-mf": {
      type: "module",
      name: "music-library-mf",
      entry: "https://stellar-sawine-73d5eb.netlify.app/remoteEntry.js",
    },
  },
  shared: {
    react: { singleton: true, eager: true },
    "react-dom": { singleton: true, eager: true },
  },
});
```

### Key Components

- **AuthContext**: Manages authentication state and user data
- **ProtectedRoute**: Guards routes requiring authentication
- **Layout**: Main application shell with header and navigation
- **DashboardPage**: Loads the music library micro frontend

### Dependencies

- **React 18**: UI framework
- **React Router**: Client-side routing
- **Vite**: Build tool and dev server
- **Module Federation**: Micro frontend architecture
- **Tailwind CSS**: Styling
- **Lucide React**: Icons

## 📁 Project Structure

```
main-app/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main application layout
│   │   └── ProtectedRoute.jsx  # Route protection component
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── pages/
│   │   ├── LoginPage.jsx       # Login form
│   │   └── DashboardPage.jsx   # Main dashboard
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── vite.config.js              # Vite and Module Federation config
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🔍 Troubleshooting

### Common Issues

1. **Module Federation Loading Issues**

   - Ensure the music library micro frontend is running
   - Check that the remote entry URL is correct
   - Verify CORS settings

2. **Authentication Issues**

   - Clear localStorage if session is corrupted
   - Check browser console for errors
   - Ensure you're using the correct demo credentials

3. **Build Issues**
   - Ensure all dependencies are installed
   - Check Node.js version compatibility
   - Clear node_modules and reinstall if needed

## 🔗 Related

- [Music Library MF](./../music-library-mf/README.md) - The remote micro frontend
- [Main Project README](./../README.md) - Overall project documentation
# music-library-main-app
