import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import NewTaskCreator from "./NewTaskCreator";
import TasksTable from "./TasksTable";

interface State {
  pageLoaded: boolean;
  selectedDate: Date | null;
  titleText: string;
  noteText: string;
  tasks: { taskId: number; title: string; note: string; date: Date | null }[];
}
function MainPage() {
  const [state, setState] = useState<State>({
    pageLoaded: false,
    selectedDate: null,
    titleText: "",
    noteText: "",
    tasks: [
      {
        taskId: Math.floor(Math.random() * 100),
        title: "Buy ticket",
        note: "Buy ticket for the Train to Rome",
        date: new Date()
      },
      {
        taskId: Math.floor(Math.random() * 100),
        title: "Call to the Hospital",
        note: "Ask about the appointment",
        date: new Date()
      },
      {
        taskId: Math.floor(Math.random() * 100),
        title: "Haircut",
        note: "Make an appointment for the haircut",
        date: new Date()
      },
      {
        taskId: Math.floor(Math.random() * 100),
        title: "Workout",
        note: "Make a plan for weekly workout",
        date: new Date()
      },
      {
        taskId: Math.floor(Math.random() * 100),
        title: "Finish the ToDo App",
        note: "Share opinions about the app with firends",
        date: new Date()
      }
    ]
  });

  useEffect(() => {
    document.title = `TO-DO APP | ${state.tasks.length !== 0 ? state.tasks.length : ""}
     ${state.tasks.length === 1 ? "task" : state.tasks.length === 0 ? "No tasks" : "tasks"}`;
  });

  function addNewTask(): void {
    let taskState = state.tasks;
    taskState.unshift({
      taskId: Math.floor(Math.random() * 100),
      title: state.titleText,
      note: state.noteText,
      date: state.selectedDate
    });
    setState({ ...state, tasks: taskState, titleText: "", noteText: "", selectedDate: null });
  }

  function deleteTask(taskId: number): void {
    let filteredData = state.tasks.filter((task) => task.taskId === taskId);
    let taskIndex = state.tasks.findIndex((itm) => itm.taskId === filteredData[0].taskId);
    state.tasks.splice(taskIndex, 1);
    let newTaskState = state.tasks;
    setState({ ...state, tasks: newTaskState });
  }

  function handleNote(e: any) {
    setState({ ...state, noteText: e.target.value });
  }

  function handleTitle(e: any) {
    setState({ ...state, titleText: e.target.value });
  }

  function handleDate(e: Date) {
    setState({ ...state, selectedDate: e });
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Box
          sx={{
            mx: "auto",
            width: { xs: "95%", sm: "90%", md: "80%", lg: "75%" },
            height: "100%",
            p: 1,
            m: 1,
            bgcolor: "#eceff1",
            borderRadius: 3,
            boxShadow: 3,
            textAlign: "center",
            fontFamily: "monospace"
          }}
        >
          <Typography
            variant="h4"
            fontFamily={"monospace"}
            sx={{
              fontSize: {
                lg: 35,
                md: 30,
                sm: 25,
                xs: 25
              }
            }}
          >
            📋 TODO APP
          </Typography>
          <NewTaskCreator
            parentState={state}
            setParentState={setState}
            handleTitle={handleTitle}
            handleNote={handleNote}
            handleDate={handleDate}
            addNewTask={addNewTask}
          />
          <Divider />
          <TasksTable parentState={state} setParentState={setState} deleteTask={deleteTask} />
          <Divider />
          <Typography
            variant="subtitle2"
            fontFamily={"monospace"}
            sx={{
              p: 1,
              pt: 2,
              fontSize: {
                lg: 14,
                md: 12,
                sm: 10,
                xs: 10
              }
            }}
          >
            Created by Shakhzod Kholikov 👨‍💻 | Copyright &copy; {new Date().getFullYear()}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default MainPage;
