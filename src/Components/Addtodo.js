import { Button, Input, WrapItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/action/Action";

const Addtodo = () => {
  const [newtext, setNewtext] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        onChange={(e) => setNewtext(e.target.value)}
        style={{ borderRadius: "5px 0 0 5px" }}
        w="500px"
        placeholder="Add todo"
        value={newtext}
      />
      <WrapItem>
        <Button
          style={{ borderRadius: "0 5px 5px 0" }}
          colorScheme="whatsapp"
          onClick={() => dispatch(add_todo(newtext))}
        >
          Add Todo
        </Button>
      </WrapItem>
    </div>
  );
};

export default Addtodo;
