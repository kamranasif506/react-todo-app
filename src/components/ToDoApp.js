import React from 'react';
import TodosLogic from './ToDoLogics';

const TodoApp = () => {
    return (
      <div className="wrapper">
        <div className="todos">
        <TodosLogic />
        </div>
      </div>
    );
  };
  export default TodoApp;