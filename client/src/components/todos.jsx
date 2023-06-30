import { getAllTodos } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./todo";
import Tabs from "./Tabs";
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from "../redux/actions/type";

const Todos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);
  const getTodos = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };
  return (
    <div>
      <div>
        <Tabs currentTab={currentTab} />
      </div>
      {getTodos().map((todo) => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
};
export default Todos;
