import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./todo.css";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import { toggleTodo, updateTodo } from "../redux/actions";
import { deleteTodo } from "../redux/actions";

import { useDispatch } from "react-redux";
import { PiDotsSixVerticalBold } from "react-icons/pi";

const Todo = ({ todo }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo?.data);

  const [showDropdown, setShowDropdown] = useState(false);

  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodo(todo._id, text));
    setText("");
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <div
      className="task"
      data-testid="todo-test"
      style={{
        paddingBottom: editing ? "40px" : "10px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {todo?.done ? (
        <CheckCircleIcon
          onClick={() => dispatch(toggleTodo(todo._id))}
          style={{
            marginRight: "5px",
            fill: "#B8A453",
            stroke: "##D8D6CD",
            strokeWidth: "2px",
            color: "#fff",
          }}
        />
      ) : (
        <CircleIcon
          onClick={() => dispatch(toggleTodo(todo._id))}
          style={{
            marginRight: "5px",
            fill: "none",
            stroke: "#B8A453",
            strokeWidth: "2px",
          }}
        />
      )}

      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "5px" }}>{todo?.heading}</span>
        {todo?.done && (
          <p style={{ color: "green", fontSize: "12px" }}>
            Completed Time {todo.comptime}
          </p>
        )}
      </div>

      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span className="iconmain" onClick={toggleDropdown}>
        <PiDotsSixVerticalBold style={{ color: "#8F760D", fontSize: "30px" }} />
      </span>

      {todo?.done ? (
        ""
      ) : (
        <span
          className="icon"
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "20px",
            color: "#B8A453",
          }}
          onClick={() => setEditing((prevState) => !prevState)}
        >
          <FaEdit /> Edit
        </span>
      )}

      {showDropdown && (
        <div className="dropdown">
          <span className="icon cancel" onClick={toggleDropdown}>
            X
          </span>

          <span
            className="icon"
            onClick={handleDelete}
            style={{ display: "flex", flexDirection: "row", fontSize: "25px" }}
          >
            <FaTrash /> Delete
          </span>
        </div>
      )}
    </div>
  );
};

export default Todo;
