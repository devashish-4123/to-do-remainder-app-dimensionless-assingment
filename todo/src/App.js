import React, { useState , useEffect} from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import DeleteButton from "./components/DeleteButton";
import axios from "axios";

const App=() => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const [tasks, setTasks] = useState([]);
  
    const fetchTasks = async () => {
      try {
        const response = await axios.get("https://backend-todo-app-t683.onrender.com/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
  
    const refreshTasks = () => {
      fetchTasks();
    };
    useEffect(() => {
      fetchTasks();
    }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div style={{ padding: "20px" }}>
        <TaskForm refreshTasks={refreshTasks} />
        <DeleteButton refreshTasks={refreshTasks}/>
        <TaskList tasks={tasks} refreshTasks={refreshTasks} />
      </div>
    </ThemeProvider>
  );
};

export default App;
