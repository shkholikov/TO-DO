import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";

function TasksTable(props: any) {
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
          <Box sx={{ p: 4 }}>
            <Typography variant="h5" fontFamily={"monospace"}>
              📝 Your Tasks
            </Typography>
            {props.parentState.tasks.length === 0 ? (
              <Typography variant="h5" fontFamily={"monospace"} sx={{ p: 2, textAlign: "left" }}>
                🙅‍♂️ There are no tasks
              </Typography>
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <FormatListNumberedIcon />
                    </TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Note</TableCell>
                    <TableCell>Due date</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.parentState.tasks.map((item: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.taskId}</TableCell>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.note}</TableCell>
                      <TableCell>{!!item.date ? item.date.toLocaleDateString() : ""}</TableCell>
                      <TableCell
                        onClick={() => props.deleteTask(item.taskId)}
                        sx={{ cursor: "pointer" }}
                      >
                        <Tooltip title="Delete task">
                          <DeleteIcon color={"warning"} />
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
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

export default TasksTable;
