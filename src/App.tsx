import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  //
  const [array, setArray] = useState<string[]>([]);
  const [taskText, setTaskText] = useState('');

  //
  const addTask = () => {
    setArray((prevArray) => [...prevArray, taskText]);
    setTaskText('');
  };

  //
  return (
    <div className='wrapper'>
      <div className='form'>
        <button className='btn' onClick={addTask}>
          Добавить
        </button>
        <input
          className='inpt'
          type='text'
          placeholder='задачу'
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
        />
        <button
          className='btn'
          style={{ backgroundColor: 'red' }}
          onClick={() => setArray([])}
        >
          Сброс
        </button>
      </div>
      <ol className='list'>
        {array.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
      {array.length > 0 && (
        <button
          className='btn'
          style={{ backgroundColor: 'orange' }}
          onClick={() => setArray(array.slice(0, -1))}
        >
          Удалить
        </button>
      )}
    </div>
  );
};

export default App;
