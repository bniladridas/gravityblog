# Gravity Blog

![Gravity Blog](/public/web-app-manifest-192x192.png)

A modern, real-time blog platform leveraging React, Firebase, and Vercel Edge Network.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- Firebase account
- Vercel account

### Installation
```bash
# Clone repository
git clone https://github.com/Gravity-Blog/fullstack.git

# Install dependencies
cd fullstack
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm start
```

### Environment Variables
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## 📦 Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

## 🔄 GitHub Integration from VSCode
1. **Clone the Repository**: Use the GitHub extension in VSCode to clone the repository.
2. **Make Changes**: Edit your code directly in VSCode.
3. **Commit and Push**: Use the source control panel to commit your changes and push them to GitHub.

## 🌐 Full-Stack Process
1. **Frontend**: Developed using React and styled with TailwindCSS.
2. **Backend**: Firebase Firestore for real-time database and Firebase Auth for authentication.
3. **Deployment**: Vercel for seamless deployment and edge network optimization.

## 🛠️ Troubleshooting with Firebase
- **Authentication Issues**: Ensure your Firebase Auth configuration is correct in the environment variables.
- **Database Errors**: Check Firestore rules and ensure your queries are correct.
- **Real-time Updates**: Verify onSnapshot listeners are set up properly and Firestore rules allow read/write access.

## 🎓 Education
This project is a great learning resource for:
- **React Development**: Learn how to build dynamic user interfaces with React.
- **Firebase Integration**: Understand how to use Firebase for real-time data and authentication.
- **Vercel Deployment**: Get hands-on experience with deploying applications using Vercel.
- **TailwindCSS**: Learn how to style your application using utility-first CSS.

## ❓ FAQ
- **Q: How do I reset my Firebase credentials?**
  - A: Go to the Firebase console, navigate to Project Settings, and generate new API keys. Update your `.env.local` file with the new credentials.

- **Q: Why is my deployment failing on Vercel?**
  - A: Ensure that your environment variables are correctly set in the Vercel dashboard. Also, check the build logs for specific errors.

- **Q: How can I enable dark mode?**
  - A: Dark mode can be toggled in the application settings. Ensure that your CSS includes the necessary styles for dark mode.

## 🌐 Live Page
Check out the live page: [Gravity Blog](https://grav-i-ty.vercel.app)

## 👤 Author
**Bniladridas**
- LinkedIn: [bniladridas](https://www.linkedin.com/in/bniladridas/)
- Twitter: [@bniladridas](https://x.com/bniladridas)

## 📜 License
MIT License - see [LICENSE](LICENSE) for details.

## 📄 Additional Resources
- [Google Developer Documentation Style Guide](https://developers.google.com/style)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vercel Documentation](https://vercel.com/docs)

---
Last updated: 2025-01-31
