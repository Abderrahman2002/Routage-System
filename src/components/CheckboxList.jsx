// src/CheckboxList.jsx
import { useState } from 'react';

const CheckboxList = () => {
  const [items, setItems] = useState([
    { id: 1, content: 'Item 1', completed: false },
    { id: 2, content: 'Item 2', completed: false },
    { id: 3, content: 'Item 3', completed: false },
    { id: 4, content: 'Item 4', completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  // Create a list of checked items
  const checkedItems = items.filter(item => item.completed);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Checkbox List</h1>

      <ul className="mt-4">
        {items.map(item => (
          <li key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
              className="mr-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className={`flex-grow ${item.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {item.content}
            </span>
          </li>
        ))}
      </ul>

      {/* Display checked items */}
      {checkedItems.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Checked Items:</h2>
          <ul className="list-disc list-inside">
            {checkedItems.map(item => (
              <li key={item.id} className="text-gray-800">{item.content}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckboxList;
