
import { Button, StyleSheet, View } from "react-native";
import MyHeader from "../components/MyHeader";

export default function HomeScreen({navigation}) {
    return(
        <View>
            <MyHeader title={'Home'}/>
            <Button title="MOSTRAR BATERIA" onPress={() => navigation.navigate("BatteryInfo")}/>
        </View>
    )
}