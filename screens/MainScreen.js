import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './DashboardScreen';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import CameraScreen from './CameraScreen';
import BluetoothScreen from './BluetoothScreen';
import ToDoListScreen from './ToDoListScreen';
import DarkMode from '../utils/darkmode.context';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

export default function MainScreen() {
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
      <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme} independent={true}>
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
