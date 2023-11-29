import './App.css';
import AddTodo from './Component/AddTodo';
import TodoList from './Component/TodoList';

function App() {  
  return (
     <div class="main">
     <h1>TO DO LIST</h1>
      <AddTodo/>
      <TodoList/>
   </div> 
  );
}

export default App;
