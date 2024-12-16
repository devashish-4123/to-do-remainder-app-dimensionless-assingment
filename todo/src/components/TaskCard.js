import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./style.css";

const TaskCard = ({ task, onDelete, onComplete, onEdit }) => {
  return (
    <Card
      sx={{
        boxShadow: 2,
        backgroundColor: "background.paper",
        borderRadius: "8px",
        width: "40vw",
        maxHeight: "6rem",
      }}
      className="card-container"
    >
      <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography variant="h6" gutterBottom>
            {task.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {task.description}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {!task.completed && (
            <IconButton
              color="success"
              onClick={onComplete}
              sx={{ "&:hover": { color: "green" } }}
            >
              <CheckCircleIcon />
            </IconButton>
          )}
          <IconButton
            color="primary"
            onClick={onEdit}
            sx={{ "&:hover": { color: "blue" } }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={onDelete}
            sx={{ "&:hover": { color: "red" } }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
