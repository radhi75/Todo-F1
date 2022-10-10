import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [value, setValue] = useState();
  console.log(value);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Button onClick={() => setValue()} value={value}>
        ALL
      </Button>
      <Button onClick={() => setValue(true)} value={value}>
        Complit
      </Button>
      <Button onClick={() => setValue(false)} value={value}>
        Is Not Complit
      </Button>

      {todos
        .filter((todo) => todo.isComplit == value || value == undefined)
        .map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
