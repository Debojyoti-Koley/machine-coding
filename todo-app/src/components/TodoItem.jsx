import React from 'react';

export default function TodoItem({ id, title, isCompleted, deleteTodo }) {
    const handleDelete = () => {
        deleteTodo(id);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid black', margin: '5px', padding: '5px', justifyContent: 'space-between' }}>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h3>{isCompleted ? 'Completed' : 'Not Completed'}</h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}