import React from 'react';
import Input from '../redux/comonents/Input';
import TodoList from '../redux/comonents/TodoList';

function Main() {
  return (
    <div>
      <Input />
      <TodoList isActive={true} />
      <TodoList isActive={false} />
    </div>
  );
}

export default Main;
