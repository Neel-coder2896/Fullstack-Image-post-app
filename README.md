# 📸 Postly — Full-Stack Image Sharing App

Postly is a modern full-stack image sharing application where users can upload an image with a caption and view all published posts in a responsive gallery.

The project demonstrates how a React frontend communicates with a Node.js/Express backend, while Multer handles image uploads, ImageKit stores images, and MongoDB stores post information.

---

## ✨ Features

* 📤 Upload images
* ✍️ Add captions to images
* 🖼️ Image preview before uploading
* ☁️ Image storage using ImageKit
* 💾 Post data stored in MongoDB
* 🔄 Fetch posts using REST API
* 🎨 Modern responsive UI
* ⚡ React + Vite frontend
* 🚀 Express.js backend
* 📱 Mobile responsive design

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Multer
* MongoDB
* Mongoose
* ImageKit

---

## 📂 Project Structure


postly-fullstack/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── Posts.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── post.model.js
│   ├── services/
│   │   └── storage.service.js
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md


---

## 🔄 Application Flow

text
User
 │
 ▼
React Frontend
 │
 │ POST /create-post
 ▼
Express Server
 │
 ▼
Multer
 │
 ▼
ImageKit
 │
 │ Image URL
 ▼
MongoDB
 │
 ▼
GET /posts
 │
 ▼
React Gallery


---

## 🔌 API Endpoints

### Create Post


POST /create-post


Creates a new post with an image and caption.

**Form Data**

| Field   | Type   | Required |
| ------- | ------ | -------- |
| image   | File   | Yes      |
| caption | String | Yes      |

---

### Get Posts

GET /posts


Returns all posts stored in MongoDB.

Example response:

json
{
  "message": "post fetched successfully",
  "posts": [
    {
      "_id": "example_id",
      "image": "https://ik.imagekit.io/example/image.jpg",
      "caption": "My first post"
    }
  ]
}


---

## ⚙️ Installation

### 1. Clone the repository

bash
git clone https://github.com/YOUR_USERNAME/postly-fullstack.git
```

### 2. Go to the backend


cd backend


Install dependencies:


npm install


### 3. Configure environment variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string

IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```


### 4. Start the backend

```bash
npm start
```

---

### 5. Start the frontend

Open another terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

The following environment variables are required:

| Variable                | Purpose                     |
| ----------------------- | --------------------------- |
| `MONGO_URI`             | MongoDB database connection |
| `IMAGEKIT_PRIVATE_KEY`  | ImageKit authentication     |



---

## 📸 Screenshots

Add screenshots of your application here.

### Create Post

```text
Add your Create Post screenshot here
```

### Posts Gallery

```text
Add your Posts Gallery screenshot here
```

---

## 🎯 What I Learned

Through this project, I learned how to:

* Build a React application using Vite
* Create reusable React components
* Implement client-side routing
* Send API requests using Axios
* Build REST APIs with Express
* Handle multipart/form-data using Multer
* Upload files to ImageKit
* Store application data in MongoDB
* Connect frontend and backend
* Handle loading and error states
* Build a responsive modern UI

---

## 🚀 Future Improvements

* 🔐 User authentication
* ❤️ Like and unlike posts
* 💬 Comments
* 🗑️ Delete posts
* ✏️ Edit captions
* 👤 User profiles
* 🔍 Search posts
* 📄 Pagination
* 🌐 Production deployment

---


---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

````


