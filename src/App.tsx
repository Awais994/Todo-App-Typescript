/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from "react";
import Test from "./components/test/Test";
import TodoTable from "./components/todoTable/TodoTable";
import { todoList, TodoContextType } from "./components/types/todo";

export const contextProvider = createContext<TodoContextType>({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  editTodo: () => {},
  editList: [],
});

function App() {
  const [todoList, setTodoList] = useState<todoList[]>([]);
  const [editList, setEditList] = useState<todoList[]>([]);

  const addTodo = (list: todoList) => {
    if (editList.length > 0) {
      const oldData: todoList[] = [...todoList];
      oldData[list?.id - 1] = list;
      setTodoList(oldData);
      setEditList([]);
    } else {
      setTodoList((prevTodoList) => [...prevTodoList, list]);
    }
  };
  const deleteTodo = (id: number) => {
    const newArray = todoList?.filter((info: todoList) => {
      if (info.id !== id) {
        return info;
      }
    });
    setTodoList(newArray);
  };
  const editTodo = (id: number) => {
    const newArray = todoList?.filter((info: todoList) => {
      if (info.id === id) {
        return info;
      }
    });
    setEditList(newArray);
  };
  return (
    <>
      <contextProvider.Provider
        value={{
          todoList,
          addTodo,
          deleteTodo,
          editTodo,
          editList,
        }}
      >
        <Test />
        <TodoTable />
      </contextProvider.Provider>
    </>
  );
}

export default App;
