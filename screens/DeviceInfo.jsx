import { StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device';

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,  
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#606',
        color: 'white'
    },
    topico: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#969',
        fontWeight: "bold",
        color: 'white'
    },
  });

export default function DeviceInfo() {
    return(
        <View>
            {/* Título */}
            <Text style={styles.titulo}>
                Informações do Aparelho
            </Text>
            {/* Informações do aparelho */}
            <Text style={styles.topico}>
                O nome do seu aparelho é: {Device.deviceName}
            </Text>
            <Text style={styles.topico}>
                A marca do aparelho é: {Device.brand}
            </Text>
            <Text style={styles.topico}>
                O modelo do aparelho é: {Device.modelName}
            </Text>
            <Text style={styles.topico}>
                O nome completo do aparelho é: {Device.modelName}
            </Text>
            <Text style={styles.topico}>
                O desgn do aparelho é: {Device.designName}
            </Text>
            <Text style={styles.topico}>
                O ano do lançamento é: {Device.deviceYearClass}
            </Text>
            <Text style={styles.topico}>
                A versão do sistema é a: {Device.osVersion}
            </Text>
            <Text style={styles.topico}>
                A arquitetura do aparelho é: {Device.osBuildId}
            </Text>
        </View>
    )
}