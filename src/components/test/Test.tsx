import React, { useState, useContext, useEffect } from "react";
import { contextProvider } from "../../App";
import { formData, todoList } from "../types/todo";
import {
  Box,
  Grid,
  Container,
  Typography,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";

function Test() {
  const { todoList, addTodo, editList } = useContext(contextProvider);
  const [formData, setFormData] = useState<formData>({
    name: "",
    description: "",
  });

  const submitFuntion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name.length === 0 || formData.description.length === 0) {
      return console.log("fill your form first");
    }
    if (editList.length > 0) {
      const data: todoList = {
        id: editList[0]?.id,
        name: formData?.name,
        description: formData.description,
      };

      addTodo(data);
    } else {
      const data: todoList = {
        id: todoList?.length + 1,
        name: formData?.name,
        description: formData.description,
      };

      addTodo(data);
    }

    setFormData({
      name: "",
      description: "",
    });
  };
  useEffect(() => {
    if (editList.length > 0) {
      const data: formData = {
        name: editList[0]?.name,
        description: editList[0].description,
      };
      setFormData(data);
    }
  }, [editList]);
  return (
    <>
      <Box my={2}>
        <Container>
          <Typography variant="h3" textAlign="center">
            My Todo
          </Typography>
          <Grid
            container
            spacing={2}
            component="form"
            my={4}
            onSubmit={submitFuntion}
          >
            <Grid item xs={12} sm={5}>
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <TextField
                  id="name"
                  fullWidth
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box>
                <FormLabel htmlFor="description">Description</FormLabel>
                <TextField
                  id="description"
                  fullWidth
                  variant="outlined"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box pt={4}>
                <Button type="submit" variant="contained">
                  {editList.length > 0 ? "Update" : "Submit"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Test;
