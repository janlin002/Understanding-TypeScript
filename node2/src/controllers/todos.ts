import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text: string}).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({message: 'Created the todo.', createdTodo: newTodo});
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.status(201).json({todos: TODOS});
}

export const updateTodo: RequestHandler<{id: string}> = (req, res, next) => {
  const todoId = req.params.id
  
  const updatedText = (req.body as {text: string}).text

  const todoIndex = TODOS.findIndex(item=>item.id === todoId)

  if(todoIndex < 0){
    throw new Error('操作有誤')
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)

  res.json({message: 'Updated', updatedTodo: TODOS[todoIndex]})
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id
  
  const todoIndex = TODOS.findIndex(item => item.id === todoId)

  if(todoIndex < 0){
    throw new Error('找不到要刪除的部分')
  }

  TODOS.splice(todoIndex, 1)

  res.json({message: 'TODO deleted!!'})
}