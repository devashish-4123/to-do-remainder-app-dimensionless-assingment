from app.services.database import db
from app.models import TaskCreate, TaskUpdate, TaskResponse
from bson import ObjectId
from datetime import datetime
from typing import List

class TaskService:

#new task
    async def create_task(self, task: TaskCreate) -> TaskResponse:
        task_dict = task.dict()
        task_dict["completed"] = False
        task_dict["created_at"] = datetime.utcnow()
        task_dict["updated_at"] = datetime.utcnow()

        result = await db.tasks.insert_one(task_dict)
        task_dict["_id"] = result.inserted_id
        return self._format_task(task_dict)


#get all tasks
    async def list_tasks(self) -> List[TaskResponse]:
        tasks_cursor = db.tasks.find()
        tasks = await tasks_cursor.to_list(length=100)
        return [self._format_task(task) for task in tasks]


#get completed tasks
    async def list_completed_tasks(self) -> List[TaskResponse]:
        tasks_cursor = db.tasks.find({"completed": True})
        tasks = await tasks_cursor.to_list(length=100)
        return [self._format_task(task) for task in tasks]




    async def list_todo_tasks(self) -> List[TaskResponse]:
        tasks_cursor = db.tasks.find({"completed": False})
        tasks = await tasks_cursor.to_list(length=100)
        return [self._format_task(task) for task in tasks]




    async def update_task(self, task_id: str, task: TaskUpdate) -> TaskResponse:
        if not ObjectId.is_valid(task_id):
            raise ValueError("Invalid task ID")

        task_dict = task.dict(exclude_unset=True)
        task_dict["updated_at"] = datetime.utcnow()

        result = await db.tasks.update_one(
            {"_id": ObjectId(task_id)}, {"$set": task_dict}
        )
        if result.modified_count == 0:
            raise ValueError("Task not found or no changes made")

        updated_task = await db.tasks.find_one({"_id": ObjectId(task_id)})
        return self._format_task(updated_task)




    async def delete_task(self, task_id: str) -> dict:
        if not ObjectId.is_valid(task_id):
            raise ValueError("Invalid task ID")

        result = await db.tasks.delete_one({"_id": ObjectId(task_id)})
        if result.deleted_count == 0:
            raise ValueError("Task not found")

        return {"message": "Task deleted successfully"}



    
    async def delete_all_todo_tasks(self) ->dict:
        result = await db.tasks.delete_many({"completed":False})
        return {"message": f"{result.deleted_count} To-Do tasks have been deleted"}
    
    
    async def delete_all_completed_tasks(self) -> dict:
        result = await db.tasks.delete_many({"completed":True})
        return {"message": f"{result.deleted_count} Completed tasks have been deleted"}



    async def delete_all_tasks(self) -> dict:
        await db.tasks.delete_many({})
        return {"message": "All tasks have been deleted"}




    def _format_task(self, task: dict) -> TaskResponse:
        return TaskResponse(
            id=str(task["_id"]),
            title=task["title"],
            description=task.get("description"),
            completed=task["completed"],
            created_at=task["created_at"],
            updated_at=task["updated_at"],
        )
