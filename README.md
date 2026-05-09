# MERN Todo App

A robust full-stack Task Management application built using the MERN stack (
MongoDB, Express.js, React, and Node.js).  
This project demonstrates the implementation of a RESTful API and complete CRUD operations, featuring a clean and responsive UI for seamless task organization.

> ⚠️ This project is still under development. New features and improvements are continuously being added.

---

## 🚀 Features

- Create, Read, Update, and Delete tasks (CRUD)
- RESTful API integration
- Responsive and clean user interface
- Task status management
- MongoDB database integration
- Express.js backend server
- React frontend application
- Node.js runtime environment
- Organized project structure
- API communication using Axios / Fetch

---

## 🛠️ Tech Stack

### Frontend
- React.js
- CSS / Tailwind CSS / Bootstrap *(adjust based on your project)*
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---

## 📁 Project Structure

mern-todo-app/
│
├── client/                 # React Frontend
│   ├── src/
│   └── public/
│
├── server/                 # Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .env
├── package.json
└── README.md

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
2. Install Dependencies
Install Backend Dependencies
cd server
npm install
Install Frontend Dependencies
cd ../client
npm install
3. Configure Environment Variables

Create a .env file inside the server folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Example:

MONGO_URI=mongodb://127.0.0.1:27017/mern-todo-app
▶️ Running the Application
Start Backend Server
cd server
npm run dev

Backend runs on:

http://localhost:5000
Start Frontend

Open another terminal:

cd client
npm start

Frontend runs on:
http://localhost:3000

Add your project screenshots here.

🔮 Future Improvements
User authentication (JWT)
Task categories
Due dates & reminders
Drag and drop task management
Dark mode
Deployment with Docker
Real-time updates using Socket.io
🤝 Contributing

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

Developed by Ibrahim Faris Mahardika
