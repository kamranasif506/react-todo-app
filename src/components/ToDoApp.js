import React from 'react';
import TodosLogic from './ToDoLogics';

const TodoApp = () => {
    return (
      <div>
        <h1 className="heading">To Do List</h1>
        <TodosLogic />
      </div>
    );
  };
  export default TodoApp;