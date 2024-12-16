from fastapi import APIRouter, HTTPException
from app.services.task_service import TaskService
from app.models import TaskCreate, TaskUpdate, TaskResponse
from typing import List

# Initialize router and service
router = APIRouter()
task_service = TaskService()

@router.post("/", response_model=TaskResponse)
async def create_task(task: TaskCreate):
    return await task_service.create_task(task)


@router.get("/", response_model=List[TaskResponse])
async def list_tasks():
    return await task_service.list_tasks()


@router.get("/completed", response_model=List[TaskResponse])
async def list_completed_tasks():
    return await task_service.list_completed_tasks()



@router.get("/todo", response_model=List[TaskResponse])
async def list_todo_tasks():
    return await task_service.list_todo_tasks()



@router.put("/{task_id}", response_model=TaskResponse)
async def update_task(task_id: str, task: TaskUpdate):
    return await task_service.update_task(task_id, task)


@router.delete("/{task_id}")
async def delete_task(task_id: str):
    return await task_service.delete_task(task_id)


@router.delete("/todo")
async def delete_all_todo_tasks():
    return await task_service.delete_all_todo_tasks()

@router.delete("/completed")
async def delete_all_completed_tasks():
    return await task_service.delete_all_completed_tasks()


@router.delete("/")
async def delete_all_tasks():
    return await task_service.delete_all_tasks()
