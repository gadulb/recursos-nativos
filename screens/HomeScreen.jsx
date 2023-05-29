import { Button, View } from "react-native";
import MyHeader from "../components/MyHeader";

export default function HomeScreen({navigation}) {
    return(
        <View>
            <MyHeader title={'Home'}/>
            <Button title="MOSTRAR BATERIA" onPress={() => navigation.navigate("BatteryInfo")}/>
            <Button title="MOSTRAR INFORMAÇÕES" onPress={() => navigation.navigate("DeviceInfo")}/>
        </View>
    )
}