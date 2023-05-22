import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import DeviceInfo from "./DeviceInfo";
import BatteryInfo from "./BatteryInfo";

const Stack = createNativeStackNavigator();

export default function RootNavigation({ navigation }) {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="DeviceInfo"
                    component={DeviceInfo} 
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name="BatteryInfo"
                    component={BatteryInfo} 
                    options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
