import React from "react";
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import TodoFilter from './components/TodoFileter';
import './App.css';

const dummyTodos = [
  {
    id: 1,
    title: "Todo 1",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Todo 2",
    isCompleted: false,
  },
]


export default function App() {
  const [todos, setTodos] = useState(() => { return JSON.parse(localStorage.getItem('todos')) || dummyTodos });
  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      isCompleted: false,
    }
    setTodos(prev => [...prev, newTodo]);
  }
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }
  const filteredList = filterValue === 'all' ? todos : filterValue === 'completed' ? todos.filter(todo => todo.isCompleted) : todos.filter(todo => !todo.isCompleted);
  return (
    <div className='container'>
      <TodoFilter currentValue={filterValue} setValue={setFilterValue} />
      <TodoList data={filteredList} deleteTodo={deleteTodo} />
      <TodoInput addTodo={addTodo} />
    </div>
  )
}