# 📚 MERN Course Registration

A full-stack **MERN** application that allows users to manage courses.  
Built with **MongoDB, Express, React, and Node.js**, the app demonstrates full **CRUD operations** (Create, Read, Update, Delete) on courses.

---

## 🚀 Features

- Add new courses with code, name, and credits.  
- View all registered courses in a list.  
- Edit existing course details.  
- Delete courses.  
- RESTful API backend with MongoDB database.  
- React frontend with Axios for API requests.  

---

## 🛠️ Tech Stack

- **Frontend:** React, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Other:** CORS, dotenv  

---

## 📂 Project Structure

mern-course-registration/
│── backend/ # Express server & APIs
│ ├── models/ # Mongoose schemas (Course.js)
│ ├── routes/ # API routes for courses
│ ├── .env # Environment variables (MONGO_URI, PORT)
│ ├── package.json
│ └── server.js # Backend entry point
│
│── frontend/ # React client
│ ├── src/ # React source code
│ │ ├── components/ # UI components (CourseForm, CourseList)
│ │ └── App.js
│ ├── package.json
│ └── public/
│
│── README.md
│── .gitignore

---

## ⚙️ Installation & Setup

### 1. Clone the repository
git clone https://github.com/<your-username>/mern-course-registration

git cd mern-course-registration
### 2. Setup Backend

```bash
cd backend
npm install


Create a `.env` file inside `backend/` with the following:

```env
MONGO_URI=your-mongodb-connection-string
PORT=5000

Run the backend:

```bash
npm start


### 3. Setup Frontend

```bash
npm install
npm start

---

## 📡 API Endpoints

Base URL: `http://localhost:5000/api/courses`

- **GET /** → Get all courses  
- **POST /** → Create a new course  
- **PUT /:id** → Update a course by ID  
- **DELETE /:id** → Delete a course by ID  

## 📘 Course Schema

```json
{
  "code": "CS101",
  "name": "Intro to Computer Science",
  "credits": 3
}

## 🚀 Future Improvements

- Add user authentication (JWT)  
- Implement pagination and search for courses  
- Add tests for APIs and frontend components  
