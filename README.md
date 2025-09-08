# 💬 Chat App Clone

A modern, real-time chat application built with React and Node.js featuring user authentication, instant messaging, and a beautiful responsive UI.

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- 🔐 **User Authentication** - Secure signup/login with JWT tokens
- 💬 **Real-time Messaging** - Instant message delivery using Socket.IO
- 👥 **User Management** - View online users and chat history
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🖼️ **Media Sharing** - Send and receive images in chats
- 🎨 **Modern UI** - Beautiful gradient designs with Tailwind CSS
- ⚡ **Fast Performance** - Optimized with Vite and React 19
- 🌐 **Profile Management** - Customizable user profiles with bio and avatar

## 🚀 Demo

### Live Demo
*(Coming Soon)*

### Screenshots

| Chat Interface | User Profile | Login Page |
|---|---|---|
| ![Chat](https://via.placeholder.com/250x200/936EFF/FFFFFF?text=Chat+UI) | ![Profile](https://via.placeholder.com/250x200/8185B2/FFFFFF?text=Profile) | ![Login](https://via.placeholder.com/250x200/282142/FFFFFF?text=Login) |

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Socket.IO Client** - Real-time communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express 5** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Socket.IO** - Real-time bidirectional communication
- **JWT** - JSON Web Token authentication
- **Bcrypt.js** - Password hashing
- **Cloudinary** - Image upload and management
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chat-app-clone.git
cd chat-app-clone
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the `server` directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/chatapp
# or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5000
NODE_ENV=development

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# CORS Settings
CLIENT_URL=http://localhost:5173
```

### Frontend Configuration

Update the API base URL in your frontend if needed. The default configuration assumes the backend runs on `http://localhost:5000`.

## 🚀 Usage

### Development Mode

1. **Start the Backend Server:**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`

2. **Start the Frontend Development Server:**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

3. **Access the Application:**
   Open your browser and navigate to `http://localhost:5173`

### Production Build

1. **Build the Frontend:**
   ```bash
   cd client
   npm run build
   ```

2. **Start the Production Server:**
   ```bash
   cd server
   NODE_ENV=production npm start
   ```

### Usage Examples

#### Creating an Account
```javascript
// Example API call for user registration
POST /api/auth/register
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "bio": "Hello, I'm new here!"
}
```

#### Sending a Message
```javascript
// Socket.IO event for sending messages
socket.emit('sendMessage', {
  receiverId: 'user_id_here',
  message: 'Hello there!'
});
```

## 📁 Project Structure

```
chat-app-clone/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, icons, dummy data
│   │   ├── components/    # Reusable React components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── RightSidebar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── lib/           # Utility functions
│   │   ├── pages/         # Page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/                # Node.js backend
│   ├── controllers/       # Route controllers (to be implemented)
│   ├── middleware/        # Custom middleware (to be implemented)
│   ├── models/            # MongoDB models (to be implemented)
│   ├── routes/            # API routes (to be implemented)
│   ├── utils/             # Utility functions (to be implemented)
│   ├── server.js          # Main server file
│   └── package.json
└── README.md
```

## 🙏 Acknowledgements

- [GreatStack Youtube](https://www.youtube.com/@GreatStackDev/) - For the great tutorial and inspiration
- [React](https://reactjs.org/) - The amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - For the beautiful styling system
- [Socket.IO](https://socket.io/) - For real-time communication
- [Vite](https://vitejs.dev/) - For the lightning-fast development experience
- [Express](https://expressjs.com/) - For the robust backend framework
- [MongoDB](https://www.mongodb.com/) - For the flexible database solution

---

⭐ **Star this repo if you found it helpful!** ⭐

*Made with ❤️ and lots of ☕*
