import React, { createContext, useState } from 'react';

// DarkModeContext 를 생성하여 다른 컴포넌트에서 어두운 모드 상태를 공유할 수 있도록 함
export const DarkModeContext = createContext();

// 자식 컴포넌트를 받아오는 컴포넌트 생성
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    // 자식 컴포넌트와 공유하고 싶은 데이터가 있다면 value 를 사용한다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
