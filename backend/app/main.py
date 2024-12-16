from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.tasks import router as tasks_router
from app.services.database import init_db

allow_origins=["http://localhost:3002", "https://675f8548df3c7d3e534ba841--cosmic-youtiao-fdf9e6.netlify.app"]

app = FastAPI(
    title="To-Do Reminder API",
    description="API for managing To-Do and Completed tasks with light/dark mode support",
    version="1.0.0",
)

init_db()
app.include_router(tasks_router, prefix="/tasks", tags=["Tasks"])

#CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Welcome to the To-Do Reminder API!"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000)