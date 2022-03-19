import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, TextField, Typography } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import AddIcon from "@mui/icons-material/Add";

function NewTaskCreator(props: any) {
  const [state, setState] = useState({
    componentLoaded: false
  });

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, componentLoaded: true });
    }, 1000);
  }, []);

  return (
    <div>
      {state.componentLoaded === true ? (
        <div>
          <Box sx={{ my: 3 }}>
            <Typography variant="h5" fontFamily={"monospace"}>
              ✍️ Create a new task here
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              my: 3
            }}
          >
            <TextField
              variant="outlined"
              label="Title"
              multiline
              maxRows={2}
              rows={2}
              value={props.parentState.titleText}
              onChange={props.handleTitle}
            ></TextField>
            <TextField
              variant="outlined"
              multiline
              maxRows={4}
              rows={4}
              label="Notes"
              value={props.parentState.noteText}
              onChange={props.handleNote}
            ></TextField>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                renderInput={(props) => <TextField {...props} />}
                label="Due date"
                clearable={true}
                minDate={new Date()}
                value={props.parentState.selectedDate}
                onChange={props.handleDate}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ textAlign: "right", pr: 4, my: 2 }}>
            <Button
              variant="outlined"
              onClick={props.addNewTask}
              disabled={
                !props.parentState.titleText ||
                !props.parentState.noteText ||
                !props.parentState.selectedDate
              }
            >
              Add Task
              <AddIcon />
            </Button>
          </Box>
        </div>
      ) : (
        <Box sx={{ display: "flex", alignContent: "center", justifyContent: "center", m: 2 }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default NewTaskCreator;
