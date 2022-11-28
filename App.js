import ContactDetail from "./pages/ContactDetail";
import AboutScreen from "./pages/AboutScreen";
import Contact from "./pages/Contact";
import Procedure from "./pages/Procedure";
import ProcedureDetail from "./pages/ProcedureDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 

import "react-native-gesture-handler";
import colors from "./config/colors";


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              headerShown: true,
              tabBarShowLabel: true,
              tabBarStyle: {
                position: "absolute",
                backgroundColor: "white",
                height: 60,
                bottom: 10,
                marginHorizontal: 20,
                borderRadius: 50,
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Contact") {
                  iconName = focused ? "contacts" : "contacts-outline";
                  size = focused ? 30 : 28;
                
                } else if (route.name === "About Developer") {
                  iconName = focused ? "account" : "account-outline";
                  size = focused ? 30 : 28;
                } else if (route.name === "Procedure") {
                  iconName = focused ? "book-open" : "book-open-outline";
                  size = focused ? 30 : 28;
                }
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              },
              tabBarInctiveTintColor: "black",
              tabBarActiveTintColor: colors.secondary,
            })}
      >
        <BottomTab.Screen name="Contact" component={Contact} />
        <BottomTab.Screen name="Contact Detail" component={ContactDetail} options={{ tabBarButton: () => null }} />
        <BottomTab.Screen name="Procedure" component={Procedure} />
        <BottomTab.Screen name="Procedure Detail" component={ProcedureDetail} options={{ tabBarButton: () => null }}/>
        <BottomTab.Screen name="About Developer" component={AboutScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}