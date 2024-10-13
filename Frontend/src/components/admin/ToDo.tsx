import React, { useState, useEffect, KeyboardEvent } from "react";
import { FaCheck } from "react-icons/fa";
import Box from "../Box";
import Keyboard from "../Keyboard";
import { GetMethods, IToDoItem, PostMethods, TodoStatus } from "@newrr/api";

const ToDo: React.FC = () => {
  const [todos, setTodos] = useState<IToDoItem[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const getMethods = new GetMethods(import.meta.env.VITE_G_API_URL);
    getMethods.getTodo().then((todos: IToDoItem[]) => {
      setTodos(todos);
      console.log(todos);
    });
  }, []);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newItem: IToDoItem = {
        id: Date.now().toString(),
        text: newTodo,
        completed: TodoStatus.NOT_DONE,
      };
      setTodos([...todos, newItem]);
      setNewTodo("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const nextStatus =
            {
              [TodoStatus.NOT_DONE]: TodoStatus.COMPLETED,
              [TodoStatus.COMPLETED]: TodoStatus.DELETED,
              [TodoStatus.DELETED]: TodoStatus.NOT_DONE,
            }[todo.completed] || TodoStatus.NOT_DONE; // Add fallback
          return { ...todo, completed: nextStatus };
        }
        return todo;
      })
    );
  };

  const saveTodos = () => {
    console.log(todos);

    const postMethods = new PostMethods(import.meta.env.VITE_G_API_URL);
    postMethods.postTodo(todos).then(() => {
      alert("To-do list saved!");
    });
  };

  return (
    <div className="w-[50%] min-h-screen bg-white p-16 mt-16">
      <div className="border border-black rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
        <ul>
          {todos
            .filter((todo) => todo.completed !== TodoStatus.DELETED)
            .map((todo) => (
              <li key={todo.id} className="flex items-center mb-2 last:mb-0">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="mr-2 text-lg"
                >
                  {todo.completed === TodoStatus.COMPLETED ? (
                    <FaCheck />
                  ) : (
                    <Box />
                  )}
                </button>
                <span
                  className={`cursor-pointer ${todo.completed === TodoStatus.COMPLETED ? "line-through" : ""}`}
                >
                  {todo.text}
                </span>
              </li>
            ))}
        </ul>
        <div className="mb-4 flex items-center">
          <button onClick={() => addTodo()} className="mr-2 text-lg">
            <Box />
          </button>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border p-2 pl-0 mr-2 w-full outline-none border-none"
            placeholder="Add new todo"
          />
        </div>
        <div className="flex justify-between items-center">
          <Keyboard />
          <button
            onClick={saveTodos}
            className="bg-darkestgreen text-white p-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
