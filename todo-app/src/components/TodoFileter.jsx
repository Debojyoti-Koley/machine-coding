import React from 'react';

export default function TodoFilter({ currentValue, setValue }) {
    return (
        <div>
            <div>Filter Todos</div>
            <label>
                <input type="radio" name="filter" checked={currentValue === 'all'} onChange={() => setValue('all')} /> All
            </label>
            <label>
                <input type="radio" name="filter" checked={currentValue === 'completed'} onChange={() => setValue('completed')} /> Completed
            </label>
            <label>
                <input type="radio" name="filter" checked={currentValue === 'will do'} onChange={() => setValue('will do')} /> Will Do
            </label>
        </div>

    );
}