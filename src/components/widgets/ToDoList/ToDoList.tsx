import React from 'react';

export interface ToDoListTask {
    id: number;
    text: string;
    completed: boolean;
}

export interface IToDoList {}

export const ToDoList: React.FC<IToDoList> = () => {
    const [tasks, setTasks] = React.useState<ToDoListTask[]>([]);
    const [newTask, setNewTask] = React.useState('');

    const addTask = () => {
        if (!newTask) return;

        const newTasks = [
            ...tasks,
            { id: Date.now(), text: newTask, completed: false },
        ];
        setTasks(newTasks);
        setNewTask('');
    };

    const toggleTask = (id: number) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
        );
        setTasks(updatedTasks);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div>
            <input
                type='text'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder='Add a new task'
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            textDecoration: task.completed
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {task.text}
                        <input
                            type='checkbox'
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
