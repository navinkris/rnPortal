import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LineChartScreen from "./visualizations/LineChartScreen";
import PieChartScreen from "./visualizations/PieChartScreen";
import BarChartScreen from "./visualizations/BarChartScreen";
import AreaChartScreen from "./visualizations/AreaChartScreen";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if(route.name === t('lineChart')) {
            iconName = 'show-chart';
          } else if (route.name === t('pieChart')) {
            iconName = 'pie-chart';
          } else if (route.name === t('barChart')) {
            iconName = 'bar-chart';
          } else if (route.name === t('areaChart')) {
            iconName = 'insert-chart';
          }
          return <Icon name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
      }}
      >
      <Tab.Screen name={t('lineChart')} component={LineChartScreen}/>
      <Tab.Screen name={t('pieChart')} component={PieChartScreen}/>
      <Tab.Screen name={t('barChart')} component={BarChartScreen}/>
      <Tab.Screen name={t('areaChart')} component={AreaChartScreen}/>
    </Tab.Navigator>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  }
})