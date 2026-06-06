import React from 'react';
import { useState } from 'react';

export default function TodoInput({ addTodo }) {
    const [input, setInput] = useState('');
    const handleOnChange = (e) => {
        setInput(e.target.value);
    }
    const onSubmit = () => {
        addTodo(input);
        setInput('');
    }
    return (
        <div>
            <input type="text" value={input} onChange={handleOnChange} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}