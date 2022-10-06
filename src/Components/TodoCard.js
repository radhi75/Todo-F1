import React from "react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";
import { Button, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TodoCard = ({ todo }) => {
  console.log("todo", todo);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer w="700px" mt="20px">
        <Table variant="striped" colorScheme="teal">
          <Tbody>
            <Tr>
              <Td
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <CheckCircleIcon />
                  {todo.text}
                </div>
                <WrapItem style={{ gap: "10px" }}>
                  <Button colorScheme="red">
                    <DeleteIcon />
                  </Button>
                  <Button colorScheme="pink">
                    <EditIcon />
                  </Button>
                </WrapItem>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TodoCard;
