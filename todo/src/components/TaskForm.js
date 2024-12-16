import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";

const TaskForm = ({refreshTasks}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    try {
      await axios.post("https://backend-todo-app-t683.onrender.com/tasks", { title, description });
      setTitle("");
      setDescription("");
      alert("Task added successfully!");
      refreshTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };


  return (
    
    <div>
    <Box
      sx={{
        padding: "20px",
        boxShadow: 2,
        backgroundColor: "background.paper",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add Task
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px", 
          marginBottom: "16px", 
        }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
      >
        Add
      </Button>
    </Box>
    </div>
    

  );
};

export default TaskForm;
