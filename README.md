# NEU Library Visitor Management System

A digital logbook application for New Era University Library to track and analyze library usage.

## Live Site

**URL:** https://neu-library-sahipaa.web.app

## Features

### Users (Students & Faculty)
- Google Sign-In with @neu.edu.ph domain restriction
- Automatic account creation on first login
- Check-in with purpose of visit and college selection
- Welcome confirmation modal

### Administrators
- Dashboard with visitor statistics
- Date filters: day, week, month, custom range
- Charts: visitors by college and purpose
- User search by name or email
- Block/unblock user access
- PDF report generation
- Switch between Admin Dashboard and Kiosk Mode

**Admin Emails:** aqlussalim.sahipa@neu.edu.ph, jcesperanza@neu.edu.ph

## Technology Stack

- HTML5, CSS3, JavaScript
- Firebase Authentication (Google Sign-In)
- Firestore Database
- Chart.js
- html2pdf.js
- Firebase Hosting

## Project Structure

neu-library-system/
├── index.html # Login with Google Sign-In
├── user-dashboard.html # Kiosk check-in with college dropdown
├── admin-dashboard.html # Admin dashboard with analytics
├── register.html # Alternative registration (optional)
├── 404.html # Custom error page
├── firebase.json # Hosting configuration
├── css/
│ └── style.css # Main styles
└── js/
└── firebase-config.js # Firebase configuration


## Database Schema

### Users Collection
- uid, firstName, lastName, email, role, isBlocked, createdAt

### Visits Collection
- userId, userEmail, userName, college, program, purpose, timestamp, date

## Security Rules

- Users can read/write their own user data
- Only admins can read all visit logs
- All authenticated users can create visit logs

## Deployment

```bash
# Clone repository
git clone https://github.com/AqlusSalimSahipa777/neu-library-visitor-system.git

# Navigate to project
cd neu-library-visitor-system

# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy
firebase deploy

Testing
Go to https://neu-library-sahipaa.web.app

Click "Sign in with Google"

Use any @neu.edu.ph account

First-time users are auto-created

Select purpose and college, then check in

Admins see additional admin panel link
