import ContactDetail from "./pages/ContactDetail";
import AboutScreen from "./pages/AboutScreen";
import Contact from "./pages/Contact";
import Procedure from "./pages/Procedure";
import ProcedureDetail from "./pages/ProcedureDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@fortawesome/fontawesome-svg-core";

import "react-native-gesture-handler";


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Contact" component={Contact} />
        <BottomTab.Screen name="Contact Detail" component={ContactDetail} options={{ tabBarButton: () => null }} />
        <BottomTab.Screen name="Procedure" component={Procedure} />
        <BottomTab.Screen name="Procedure Detail" component={ProcedureDetail} options={{ tabBarButton: () => null }}/>
        <BottomTab.Screen name="About Developer" component={AboutScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}