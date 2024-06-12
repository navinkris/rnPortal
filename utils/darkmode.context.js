import { createContext } from 'react';

const DarkMode = createContext({
  isDarkMode: false,
  setIsDarkMode: () => {},
  setUseDeviceSettings: () => {},
});

export default DarkMode;