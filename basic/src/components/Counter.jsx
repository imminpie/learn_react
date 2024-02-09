import React, { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);

  const onIncrease = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <div className='counter'>
      <div className='number'>{num}</div>
      <button className='button' onClick={onIncrease}>
        Add +
      </button>
    </div>
  );
}
