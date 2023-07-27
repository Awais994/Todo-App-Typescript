export interface todoList {
  id: number;
  name: string;
  description: string;
}

// context
export interface TodoContextType {
  todoList: Array<todoList>;
  editList: Array<todoList>;
  addTodo: (list: todoList) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
}

export interface formData {
  name: string;
  description: string;
}
