import { StyleSheet, View } from "react-native";
import MyHeader from "../components/MyHeader";
import { Text } from "react-native-paper";
import Footer from "../components/Footer";

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


export default function Inicio({navigation}) {
    return(
        <View style={styles.container}>
            <MyHeader title={'Início'}/>
            <View style={styles.info}>
                <Text>INÍCIO</Text>
            </View>
            <Footer />
        </View>
    )
}