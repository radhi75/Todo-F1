import React, { useState } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Button, WrapItem } from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { delete_todo, edit_todo, iscomplit } from "../redux/action/Action";

const TodoCard = ({ todo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [newtodo, setNewtodo] = useState("");

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
                  <CheckCircleIcon
                    onClick={() => dispatch(iscomplit(todo.id))}
                  />
                  {todo.isComplit ? (
                    <span
                      style={{ textDecoration: "line-through", color: "green" }}
                    >
                      {todo.text}
                    </span>
                  ) : (
                    todo.text
                  )}
                </div>
                <WrapItem style={{ gap: "10px" }}>
                  <Button
                    colorScheme="red"
                    onClick={() => dispatch(delete_todo(todo.id))}
                  >
                    <DeleteIcon />
                  </Button>
                  <Button colorScheme="pink" onClick={onOpen}>
                    <EditIcon />
                  </Button>

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Edit TODO</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Input
                          size="lg"
                          onChange={(e) => setNewtodo(e.target.value)}
                          value={newtodo}
                        />
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Close
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => dispatch(edit_todo(newtodo, todo.id))}
                        >
                          Save
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
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
