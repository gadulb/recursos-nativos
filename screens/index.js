import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import Footer from "../components/Footer";
import MyScreenOrientation from "./MyScreenOrientation";

const Stack = createNativeStackNavigator();

export default function RootNavigation({navigation}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="BatteryInfo"
                    component={BatteryInfo}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="DeviceInfo"
                    component={DeviceInfo}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="MyScreenOrientation"
                    component={MyScreenOrientation}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Footer"
                    component={Footer}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}