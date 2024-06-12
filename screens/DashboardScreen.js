import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LineChartScreen from "./visualizations/LineChartScreen";
import PieChartScreen from "./visualizations/PieChartScreen";
import BarChartScreen from "./visualizations/BarChartScreen";
import AreaChartScreen from "./visualizations/AreaChartScreen";

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
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