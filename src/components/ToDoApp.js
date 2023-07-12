import React from 'react';
import TodosLogic from './ToDoLogics';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
