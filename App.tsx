import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {ThemeProviderCustom,} from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProviderCustom>
      <HomeScreen />
    </ThemeProviderCustom>
  );
}