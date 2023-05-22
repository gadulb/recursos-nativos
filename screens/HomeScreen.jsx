import { Button } from "react-native-paper";
import { Text, View } from "react-native";
import MyHeader from "../components/MyHeader";

export default function HomeScreen({navigation}) {
    return(
        <View>
            <MyHeader title={'Home'}/>
            <Button onPress={() => navigation.navigate("BatteryInfo")}>Mostrar Informações da Bateria</Button>
        </View>
    )
}