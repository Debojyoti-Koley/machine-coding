import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ data, deleteTodo }) {
    return (
        <div>
            <div>Todo List</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    data.map((todo) => (<TodoItem key={todo.id} id={todo.id} title={todo.title} deleteTodo={deleteTodo}/>))
                }
            </div>
        </div>
    )
}