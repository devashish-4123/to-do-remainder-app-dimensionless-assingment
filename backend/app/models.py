from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class TaskBase(BaseModel):
    title: str = Field(...)
    description: Optional[str] = Field(None)
    completed: bool = Field(False)
    
class TaskCreate(TaskBase):
    pass

class TaskUpdate(TaskBase):
    
        title: Optional[str] = Field(None)
        description: Optional[str] = Field(None)
        completed: Optional[bool]= Field(None)
        
class TaskResponse(TaskBase):
    id: str
    created_at: datetime
    updated_at: datetime