


`https://backend-todo-app-t683.onrender.com/tasks`  method-post

```
{
    "title": "Buy groceries",
    "description": "Milk, eggs, and bread"
}
```

```
{
  "title": "Buy groceries",
  "description": "Milk, eggs, and bread",
  "completed": false,
  "id": "675e5aa7dfdf2bb42ced91b0",
  "created_at": "2024-12-15T04:27:19.966153",
  "updated_at": "2024-12-15T04:27:19.966153"
}
```


`https://backend-todo-app-t683.onrender.com/tasks` method-GET

```
[
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, and bread",
    "completed": false,
    "id": "675dfc5f579c06f6d4818e76",
    "created_at": "2024-12-14T21:45:03.457000",
    "updated_at": "2024-12-14T21:45:03.457000"
  },
  {
    "title": "Test Task",
    "description": "This is a test task",
    "completed": false,
    "id": "675dfe049dae8467aff8129c",
    "created_at": "2024-12-14T21:52:04.255000",
    "updated_at": "2024-12-14T21:52:04.255000"
  },
  {
    "title": "Test Task",
    "description": "This is a test task",
    "completed": false,
    "id": "675dfebdf51ada66f3198a77",
    "created_at": "2024-12-14T21:55:09.024000",
    "updated_at": "2024-12-14T21:55:09.024000"
  },
  {
    "title": "Test Task",
    "description": "This is a test task",
    "completed": false,
    "id": "675dfeed42653e687342c276",
    "created_at": "2024-12-14T21:55:57.407000",
    "updated_at": "2024-12-14T21:55:57.407000"
  },
  {
    "title": "Buy groceries",
    "description": "Milk, eggs, and bread",
    "completed": false,
    "id": "675e5aa7dfdf2bb42ced91b0",
    "created_at": "2024-12-15T04:27:19.966000",
    "updated_at": "2024-12-15T04:27:19.966000"
  }
]
```

`https://backend-todo-app-t683.onrender.com/tasks/675dfe049dae8467aff8129c` method- PUT

```
{
  "title": "Test Task",
  "description": "This is a test task",
  "completed": true,
  "id": "675dfe049dae8467aff8129c",
  "created_at": "2024-12-14T21:52:04.255000",
  "updated_at": "2024-12-15T04:51:07.394000"
}
```

`https://backend-todo-app-t683.onrender.com/tasks/todo` method-GET

```
[
  {
    "title": "Clean the house",
    "description": "Vacuum the living room, mop the kitchen floor, and dust the shelves",
    "completed": false,
    "id": "675e7ebddfdf2bb42ced91cd",
    "created_at": "2024-12-15T07:01:17.604000",
    "updated_at": "2024-12-15T07:01:17.604000"
  },
  {
    "title": "Doctor's Appointment",
    "description": "Annual check-up with Dr. Smith at 10:00 AM",
    "completed": false,
    "id": "675e7efcdfdf2bb42ced91ce",
    "created_at": "2024-12-15T07:02:20.380000",
    "updated_at": "2024-12-15T07:02:20.380000"
  },
  {
    "title": "Electronics Shopping",
    "description": "Buy a laptop, headphones, and a USB charger",
    "completed": false,
    "id": "675e7f2fdfdf2bb42ced91cf",
    "created_at": "2024-12-15T07:03:11.518000",
    "updated_at": "2024-12-15T07:03:11.518000"
  },
  {
    "title": "Prepare presentation",
    "description": "Create slides for the upcoming team meeting on project status",
    "completed": false,
    "id": "675e7f53dfdf2bb42ced91d0",
    "created_at": "2024-12-15T07:03:47.960000",
    "updated_at": "2024-12-15T07:03:47.960000"
  },
  {
    "title": "Study for Exam",
    "description": "Revise chapters 3 to 7 and solve sample papers",
    "completed": false,
    "id": "675e7f68dfdf2bb42ced91d1",
    "created_at": "2024-12-15T07:04:08.233000",
    "updated_at": "2024-12-15T07:04:08.233000"
  }
]
```



`https://backend-todo-app-t683.onrender.com/tasks/completed` method-GET

```
[
  {
    "title": "Study for Exam",
    "description": "Revise chapters 3 to 7 and solve sample papers",
    "completed": true,
    "id": "675e7f83dfdf2bb42ced91d2",
    "created_at": "2024-12-15T07:04:35.079000",
    "updated_at": "2024-12-15T07:11:38.660000"
  },
  {
    "title": "Pay Bills",
    "description": "Pay electricity, water, and internet bills before the due date",
    "completed": true,
    "id": "675e7f91dfdf2bb42ced91d3",
    "created_at": "2024-12-15T07:04:49.983000",
    "updated_at": "2024-12-15T07:10:52.482000"
  },
  {
    "title": "Practice Guitar",
    "description": "Learn and practice three new chords",
    "completed": true,
    "id": "675e7fd3dfdf2bb42ced91d4",
    "created_at": "2024-12-15T07:05:55.058000",
    "updated_at": "2024-12-15T07:10:12.308000"
  }
]
```

`https://backend-todo-app-t683.onrender.com/tasks/675e7fd3dfdf2bb42ced91d4` method-DELETE

```
{
  "message": "Task deleted successfully"
}
```




`https://backend-todo-app-t683.onrender.com/tasks`  method-DELETE

```
{
  "message": "All tasks have been deleted"
}
```