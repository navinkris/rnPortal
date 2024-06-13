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

          if(route.name === 'LineChart') {
            iconName = 'show-chart';
          } else if (route.name === 'PieChart') {
            iconName = 'pie-chart';
          } else if (route.name === 'BarChart') {
            iconName = 'bar-chart';
          } else if (route.name === 'AreaChart') {
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
      <Tab.Screen name="LineChart" component={LineChartScreen}/>
      <Tab.Screen name="PieChart" component={PieChartScreen}/>
      <Tab.Screen name="BarChart" component={BarChartScreen}/>
      <Tab.Screen name="AreaChart" component={AreaChartScreen}/>
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