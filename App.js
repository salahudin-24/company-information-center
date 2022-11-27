import ListScreen from "./pages/ListScreen";
import AboutScreen from "./pages/AboutScreen";
import DetailScreen from "./pages/DetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import "react-native-gesture-handler";


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="List" component={ListScreen} />
        <BottomTab.Screen name="About" component={AboutScreen} />
        <BottomTab.Screen name="Detail" component={DetailScreen} options={{ tabBarButton: () => null }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}