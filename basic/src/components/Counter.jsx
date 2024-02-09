import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((prev) => prev + 1);
    onClick();
  };

  return (
    <div className='counter'>
      <p className='number'>
        {count} <span className='total'>/{total}</span>
      </p>
      <button className='button' onClick={onIncrease}>
        Add +
      </button>
    </div>
  );
}
