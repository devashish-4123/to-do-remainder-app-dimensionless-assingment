import React from "react";
import { Button } from "@mui/material";
import axios from "axios";


const DeleteButton = ({refreshTasks}) =>{
    const handleAllDelete = async () => {
        try {
         
          await axios.delete("https://backend-todo-app-t683.onrender.com/tasks");
          refreshTasks();
        } catch (error) {
          console.error("Error deleting all tasks:", error);
        } 
    }; 

    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"25px"
        
        }}
      >
        <Button
          variant="contained"
          color="error"
          sx={{
            padding: "0.5rem 1.5rem", 
            fontSize: "0.9rem",
            textTransform: "none",
          }}
          onClick={handleAllDelete}
        >
          Delete All To-Do's
        </Button>
      </div>
    );
};

export default DeleteButton;