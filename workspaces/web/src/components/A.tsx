import React from 'react';
import { CreateTodoDto, Todo } from '@monorepo/common';

const A = () => {
  const prueba: CreateTodoDto = {
    title: 'asdasd',
  };
  return (
    <div>
      <p>hola</p>
      <pre>{JSON.stringify(Todo, null, 2)}</pre>
    </div>
  );
};

export default A;
