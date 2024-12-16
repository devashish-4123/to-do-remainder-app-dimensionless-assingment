import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, TextField, Button } from "@mui/material";
import axios from "axios";
import TaskCard from "./TaskCard";
import "./style.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskValue, setNewTaskValue] = useState({ title: "", description: "" });

  const fetchTasks = async () => {
    try {
      const response = await axios.get("https://backend-todo-app-t683.onrender.com/tasks");
      const todoTasks = response.data.filter((task) => !task.completed);
      const doneTasks = response.data.filter((task) => task.completed);

      setTasks(todoTasks);
      setCompletedTasks(doneTasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`https://backend-todo-app-t683.onrender.com/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleMarkAsCompleted = async (id) => {
    try {
      await axios.put(`https://backend-todo-app-t683.onrender.com/tasks/${id}`, { completed: true });
      fetchTasks();
    } catch (error) {
      console.error("Error marking task as completed:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task.id);
    setNewTaskValue({ title: task.title, description: task.description }); // Initialize with existing task values
  };


  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`https://backend-todo-app-t683.onrender.com/tasks/${id}`, {
        ...newTaskValue, // Send the updated task data
        completed: false, // Ensure `completed` is set to false
      });
      setEditingTask(null);
      setNewTaskValue({ title: "", description: "" });
      fetchTasks();
    } catch (error) {
      console.error("Error saving edited task:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setNewTaskValue("");
  };

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "2rem",
      }}
      className="container"
    >
      {/* To-Do List */}
      <Paper
        elevation={3}
        sx={{
          padding: "1rem",
          flex: 1,
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          To-Do List
        </Typography>
        <Grid container spacing={2}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Grid item xs={12} key={task.id}>
                {editingTask === task.id ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <TextField
                      label="Title"
                      value={newTaskValue.title}
                      onChange={(e) =>
                        setNewTaskValue((prev) => ({ ...prev, title: e.target.value }))
                      }
                      fullWidth
                    />
                    <TextField
                      label="Description"
                      value={newTaskValue.description}
                      onChange={(e) =>
                        setNewTaskValue((prev) => ({ ...prev, description: e.target.value }))
                      }
                      fullWidth
                    />
                    <Box sx={{ display: "flex", gap: "10px", marginTop: "8px" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSaveEdit(task.id)}
                      >
                        Save
                      </Button>
                      <Button variant="outlined" onClick={handleCancelEdit}>
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <TaskCard
                    task={task}
                    onDelete={() => handleDeleteTask(task.id)}
                    onComplete={() => handleMarkAsCompleted(task.id)}
                    onEdit={() => handleEditTask(task)}
                  />
                )}
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No tasks in the To-Do list.
            </Typography>
          )}
        </Grid>
      </Paper>

      {/* Completed List */}
      <Paper
        elevation={3}
        sx={{
          padding: "1rem",
          flex: 1,
          maxHeight: "70vh",
          overflowY: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Completed List
        </Typography>
        <Grid container spacing={2}>
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <Grid item xs={12} key={task.id}>
                <TaskCard task={task} onDelete={() => handleDeleteTask(task.id)} />
              </Grid>
            ))
          ) : (
            <Typography variant="body1" color="textSecondary">
              No completed tasks yet.
            </Typography>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default TaskList;
