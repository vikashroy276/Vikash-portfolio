import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const lightTheme = {
  background: '#ffffff',
  card: '#f5f5f5',
  text: '#111111',
  subText: '#666666',
  border: '#dddddd',
  primary: '#00cc66',
};

const darkTheme = {
  background: '#050a05',
  card: '#0d160d',
  text: '#ffffff',
  subText: '#889988',
  border: 'rgba(0,255,136,0.2)',
  primary: '#00ff88',
};

const ThemeContext = createContext<any>(null);

export const ThemeProviderCustom = ({
  children,
}: any) => {

  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark
    ? darkTheme
    : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeCustom = () =>
  useContext(ThemeContext);