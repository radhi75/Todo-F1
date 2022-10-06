import { Button, Input, WrapItem } from "@chakra-ui/react";
import React from "react";

const Addtodo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        style={{ borderRadius: "5px 0 0 5px" }}
        w="500px"
        placeholder="Add todo"
      />
      <WrapItem>
        <Button style={{ borderRadius: "0 5px 5px 0" }} colorScheme="whatsapp">
          Add Todo
        </Button>
      </WrapItem>
    </div>
  );
};

export default Addtodo;
