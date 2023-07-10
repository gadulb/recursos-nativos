import { Button, StyleSheet, View } from "react-native";
import MyHeader from "../components/MyHeader";
import { Text } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10,
    },
    info: {
      flex: 1,
      gap: 20,
      padding: 20,
      alignSelf: "center",
      justifyContent: "center",
    },
});


export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <MyHeader title={'Home'}/>
            <View style={styles.info}>
                <Button title="INÍCIO" onPress={() => navigation.navigate("Inicio")}/>
                <Button title="MOSTRAR BATERIA" onPress={() => navigation.navigate("BatteryInfo")}/>
                <Button title="MOSTRAR INFORMAÇÕES" onPress={() => navigation.navigate("DeviceInfo")}/>
                <Button title="MOSTRAR ORIENTAÇÃO" onPress={() => navigation.navigate("MyScreenOrientation")}/>
                <Button title="MOSTRAR NOTIFICAÇÃO" onPress={() => navigation.navigate("Notify")}/>
                <Button title="MOSTRAR CONTATOS" onPress={() => navigation.navigate("ContactsInfo")}/>
                <Button title="MOSTRAR CRIATIVIDADE" onPress={() => navigation.navigate("Criatividade")}/>
            </View>
        </View>
    )
}