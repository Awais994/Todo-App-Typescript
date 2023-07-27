import React, { useContext } from "react";
import {
    Box,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";

import { contextProvider } from "../../App";

function TodoTable() {
  const { todoList, deleteTodo, editTodo } = useContext(contextProvider);

  return (
    <Box>
      <Container>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {["Name", "Description", "Delete", "Update"].map((name) => (
                  <TableCell key={name}>{name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {todoList?.length !== 0 ? (
                todoList?.map(({ id, name, description }) => {
                  return (
                    <TableRow
                      key={id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>

                      <TableCell>{description}</TableCell>
                      <TableCell>
                        <Button
                          // disabled={withDraw}
                          color="warning"
                          variant="contained"
                          sx={{ marginTop: { xs: "20px", md: "2px" } }}
                          onClick={() => deleteTodo(id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          // disabled={withDraw}
                          color="primary"
                          variant="contained"
                          sx={{ marginTop: { xs: "20px", md: "2px" } }}
                          onClick={() => editTodo(id)}
                        >
                          Update
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={4} sx={{ textAlign: "center" }}>
                    No item
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default TodoTable;
