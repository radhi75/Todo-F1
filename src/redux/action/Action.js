import { ADD_TODO, DELETE, EDIT, ISCOMPLIT } from "./ActionTypes";

export const add_todo = (newtext) => {
  return {
    type: ADD_TODO,
    payload: { id: Math.random(), text: newtext, isComplit: false },
  };
};
export const delete_todo = (id) => {
  return {
    type: DELETE,
    payload: { id },
  };
};
export const edit_todo = (newtodo, id) => {
  return {
    type: EDIT,
    payload: { id, newtodo },
  };
};
export const iscomplit = (id) => {
  return {
    type: ISCOMPLIT,
    payload: { id },
  };
};
