import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onPointerMove = (e) => {
    // setPosition({ x: e.clientX, y: e.clientY });
    // 만약 수직으로만 이동이 가능하다면?
    setPosition((prev) => ({ ...prev, y: e.clientY }));
  };

  return (
    <div className='container' onPointerMove={onPointerMove}>
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
