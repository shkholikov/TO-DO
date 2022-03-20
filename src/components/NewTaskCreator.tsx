import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
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
            <Typography
              variant="h5"
              fontFamily={"monospace"}
              sx={{
                fontSize: {
                  lg: 30,
                  md: 25,
                  sm: 20,
                  xs: 20
                }
              }}
            >
              ✍️ Create a new task here
            </Typography>
          </Box>
          <Grid container justifyContent="center" spacing={{ xs: 1, sm: 2, md: 2, lg: 12 }}>
            <Grid item>
              <TextField
                variant="outlined"
                label="Title"
                multiline
                maxRows={2}
                rows={2}
                value={props.parentState.titleText}
                onChange={props.handleTitle}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                multiline
                maxRows={4}
                rows={4}
                label="Notes"
                value={props.parentState.noteText}
                onChange={props.handleNote}
              ></TextField>
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent={{ xs: "center", sm: "center", md: "right", lg: "right" }}
            sx={{ px: 4, my: 2 }}
          >
            <Grid item>
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
            </Grid>
          </Grid>
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
