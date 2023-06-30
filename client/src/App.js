import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import Todos from './components/todos';

function App() {
  return (
    <div>
      <Header/>
      <ToDoForm/>
      <Todos/>
   
    </div>
  );
}

export default App;
