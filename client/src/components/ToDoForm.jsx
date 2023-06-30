import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
const ToDoForm = () => {
  const dispatch = useDispatch();
  const [task, settask] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(task));
    settask("");
  };
  const onInputChange = (e) => {
    settask(e.target.value);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        placeholder="Enter New To Do"
        className="input"
        onChange={onInputChange}
        value={task}
      />
    </form>
  );
};

export default ToDoForm;
