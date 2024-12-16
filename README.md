# To-Do remainder app using RESTFUL

**Hosted website Link**: [Click here To View Website](https://cosmic-youtiao-fdf9e6.netlify.app/)

# To-Do Reminder App 📝

This is a full-stack To-Do Reminder application that helps users manage their tasks. It features a light/dark mode toggle, a clean UI, and functionality to add, update, delete, and mark tasks as completed. The backend is built with FastAPI and MongoDB, while the frontend uses React with Material-UI (MUI) for a responsive design.

---

## Features ✨

- **Add Tasks**: Add tasks with a title and description.
- **Delete All Tasks**: Clear all tasks in one click.
- **Task Management**: Mark tasks as completed or delete individual tasks.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **To-Do and Completed Lists**: Separate columns for tasks that are pending and completed.

---

## Tech Stack 🛠️

### Frontend
- **React**: Frontend framework for building user interfaces.
- **Material-UI (MUI)**: Component library for styling and design.
- **Axios**: For making API requests to the backend.

### Backend
- **FastAPI**: Backend framework for building APIs.
- **MongoDB**: Database for storing tasks.
- **Python**: Backend programming language.

### Deployment
- **Frontend**: Deployed on Netlify.
- **Backend**: Deployed on Render.

---

## Project Setup 🚀

### Prerequisites
- **Node.js**: For running the frontend.
- **Python**: Backend uses Python 3.11 or compatible versions.
- **MongoDB**: Database for storing tasks.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/todo-reminder-app.git

cd todo-reminder-app
```

## Backend Setup

### Step 1: Navigate To backend Directory:  
```bash
cd backend
```
### Step 2: Create a Virtual Environment:  
```bash
python -m venv venv
source venv/bin/activate  # For Mac/Linux
venv\Scripts\activate     # For Windows
```

### Step 3: Install Dependencies:  
```bash
pip install -r requirements.txt
```

## Running Testcases - To run test case file, must stetup backend - Follow above steps

### Step 1: Navigate To backend Directory and activate the virtual environment:  
```bash
cd backend
source venv/bin/activate  # For Mac/Linux
venv\Scripts\activate     # For Windows
```
### Step 2: Navigate to test file:  
```bash
cd app
```
### Step 3: Run the test cases:  
```bash
pytest -v test.py
```



