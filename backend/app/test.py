import requests

BASE_URL = "https://backend-todo-app-t683.onrender.com/tasks"

def test_create_task():
    payload = {
        "title": "Buy groceries",
        "description": "Milk, eggs, and bread"
    }
    response = requests.post(BASE_URL, json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == payload["title"]
    assert data["description"] == payload["description"]
    assert data["completed"] is False
    assert "id" in data
    print("test_create_task passed!")


def test_get_all_tasks():
    response = requests.get(BASE_URL)
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert all("title" in task for task in data)
    assert all("description" in task for task in data)
    print("test_get_all_tasks passed!")


def test_update_task():
    #Create
    payload = {
        "title": "Test Task",
        "description": "This is a test task"
    }
    create_response = requests.post(BASE_URL, json=payload)
    assert create_response.status_code == 200
    task = create_response.json()
    task_id = task["id"]

    #Update
    update_payload = {
        "title": "Test Task",
        "description": "This is a test task",
        "completed": True
    }
    update_response = requests.put(f"{BASE_URL}/{task_id}", json=update_payload)
    assert update_response.status_code == 200
    updated_task = update_response.json()
    assert updated_task["completed"] is True
    assert updated_task["id"] == task_id
    print("test_update_task passed!")


def test_get_todo_tasks():
    response = requests.get(f"{BASE_URL}/todo")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert all(task["completed"] is False for task in data)
    print("test_get_todo_tasks passed!")


def test_get_completed_tasks():
    response = requests.get(f"{BASE_URL}/completed")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    assert all(task["completed"] is True for task in data)
    print("test_get_completed_tasks passed!")


def test_delete_task():
    # Create a task to delete
    payload = {
        "title": "Practice Guitar",
        "description": "Learn and practice three new chords"
    }
    create_response = requests.post(BASE_URL, json=payload)
    assert create_response.status_code == 200
    task = create_response.json()
    task_id = task["id"]

    delete_response = requests.delete(f"{BASE_URL}/{task_id}")
    assert delete_response.status_code == 200
    message = delete_response.json()
    assert message["message"] == "Task deleted successfully"
    print("test_delete_task passed!")

def test_delete_all_tasks():
    response = requests.get(BASE_URL)
    if response.status_code == 200:
        tasks = response.json()
        for task in tasks:
            task_id = task["id"]
            requests.delete(f"{BASE_URL}/{task_id}")
    print("test_delete_all_tasks passed!")


if __name__ == "__main__":
    test_create_task()
    test_get_all_tasks()
    test_update_task()
    test_get_todo_tasks()
    test_get_completed_tasks()
    test_delete_task()
    test_delete_all_tasks()

