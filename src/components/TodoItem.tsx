import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
    todo: Todo;
    toggleTodo: (id: number) => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
    return (
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.description}
        </span>
      </div>
    );
  };
  
  export default TodoItem;