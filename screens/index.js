import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import BatteryInfo from "./BatteryInfo";
import DeviceInfo from "./DeviceInfo";
import Footer from "../components/Footer";
import MyScreenOrientation from "./MyScreenOrientation";
import Notify from "./Notify";
import Inicio from "./Inicio";
import ContactsInfo from "./ContactsInfo";
import Items from "../components/Items";
import Criatividade from "./Creatividade";

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
                    name="Inicio"
                    component={Inicio}
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
                    name="Notify"
                    component={Notify}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Footer"
                    component={Footer}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="ContactsInfo"
                    component={ContactsInfo}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Items"
                    component={Items}
                    options={{headerShown: false}} />
                <Stack.Screen
                    name="Criatividade"
                    component={Criatividade}
                    options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}