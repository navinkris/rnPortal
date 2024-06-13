import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import BluetoothScreen from './screens/BluetoothScreen';
import ToDoListScreen from './screens/ToDoListScreen';
import DarkMode from './utils/darkmode.context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

export default function App() {
  const {t} = useTranslation();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const CustomDarkTheme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
      background: '#202120',
      card: '#121212'
    }
  }

  return (
    <DarkMode.Provider
      value={{
        isDarkMode,
        setIsDarkMode
      }}
    >
      <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name={t('home')} component={HomeScreen}/>
          <Drawer.Screen name={t('dashboard')} component={DashboardScreen}/>
          <Drawer.Screen name={t('camera')} component={CameraScreen}/>
          <Drawer.Screen name={t('bluetooth')} component={BluetoothScreen}/>
          <Drawer.Screen name={t('todoList')} component={ToDoListScreen}/>
          <Drawer.Screen name={t('settings')} component={SettingsScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </DarkMode.Provider>
  )
};
