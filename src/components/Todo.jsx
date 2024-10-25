// src/TodoList.jsx
import{ useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [taskInput, setTaskInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTasks = [...tasks, taskInput];
      setTasks(newTasks);
      setTaskInput('');
      localStorage.setItem('tasks', JSON.stringify(newTasks));
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (index) => {
    setEditingIndex(index);
    setTaskInput(tasks[index]);
  };

  const updateTask = () => {
    if (editingIndex !== null && taskInput.trim() !== '') {
      const newTasks = tasks.map((task, index) =>
        index === editingIndex ? taskInput : task
      );
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setTaskInput('');
      setEditingIndex(null);
    }
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">To-Do List</h1>
      <div className="flex mt-4">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded"
          placeholder="Add or edit a task"
        />
        {editingIndex !== null ? (
          <button
            onClick={updateTask}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addTask}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add
          </button>
        )}
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <span>{task}</span>
            <div>
              <button onClick={() => editTask(index)} className="text-yellow-500 mr-2">
                <i className="fas fa-edit"></i>
              </button>
              <button onClick={() => removeTask(index)} className="text-red-500">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
