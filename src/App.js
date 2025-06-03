import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [todoValue, setTodoValue] = useState("");

  const [todos, addTodo] = useState([
    { id: 1, title: "Do home work", isDone: false },
    { id: 2, title: "Workout", isDone: false },
  ]);

  const [student, setStudent] = useState({
    name: "Dara",
    age: 22,
    className: "ABA",
    id: 1,
  });

  const handleStudent =(e) => {
    setStudent(e.target.value);
  }

  // arrow function
  const updateStudentName = () => {
    setStudent((student) => ({ ...student, name: "Serey" }));
  };

  const handleOnChange = (e) => {
    setTodoValue(e.target.value);
  };

  const addNewTodo = () => {
    if (todoValue) {
      const newId = Date.now();
      const newTodo = { id: newId, title: todoValue, isDone: false };
      addTodo([...todos, newTodo]);
      setTodoValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };
  
  const handleUpdate = (id) => {
    const trimmed = todoValue.trim();
    if (!trimmed) {
      alert("Please input something before update");
      return;
    }
    const updatedTodo = todos.map(todo => 
      todo.id === id ? {... todo, title: todoValue} : todo
    );
    addTodo(updatedTodo);
    setTodoValue("");
  }
  const handleRemove = (id) => {
    const removeTodo = todos.reduce((acc, todo) => {
      if (todo.id !== id) {
        acc.push(todo);
      }
      return acc;
    },[]);
    addTodo(removeTodo);
  };
  return (
    <div className="App">
      <p>Student</p>
      <input
        type="text"
        value={student}
        onChange={handleStudent}
      />
      <div>Id: {student.id}</div>
      <div>Name: {student.name}</div>
      <div>Age: {student.age}</div>
      <div>Class: {student.className}</div>
      <div>Grade: {student.grade}</div>
      <button onClick={updateStudentName}>Update Student Name</button>
      <hr />
      <p>Todo</p>
      <input
        type="text"
        value={todoValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addNewTodo}>Add todo</button>
      <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; 
