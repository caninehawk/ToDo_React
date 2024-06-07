import React, { useState } from 'react';

function ToDo() {
    const [task, updateTask] = useState([]);
    const [taskName, setTaskName] = useState('');

    function addTask() {
        if (taskName.trim()) {
            updateTask(t => [...t, taskName]);
            setTaskName(''); // Clear the input after adding the task
        }
    }

    function removeTask(indexToRemove) {
        updateTask(t => t.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div>
            <input 
                type="text" 
                value={taskName} 
                onChange={e => setTaskName(e.target.value)} 
                placeholder="Enter the Task"
            />
            <button className="add" onClick={addTask}>Add Task</button>
            <ul>
                <h2>Tasks</h2>
                {task.map((task, index) => 
                    <li key={index}>
                        <div className="listItems">
                            <p>{task}</p>
                            <button className="remove" onClick={() => removeTask(index)}>Remove</button>
                        </div>    
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ToDo;
