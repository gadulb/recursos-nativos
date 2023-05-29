import {Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import { ScrollView } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import MyHeader from "../components/MyHeader";

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
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#606",
    color: "white",
  },
  button:{
    alignItems: "center",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    fontWeight: "bold",
    color: "white",
  }
});

async function padrao(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.DEFAULT
  );
}

async function direita(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
}

async function esquerda(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  );
}

async function normal(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP
  );
}

async function inverter(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_DOWN
  );
}

async function normal2(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT
  );
}

async function informar(){
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.OTHER
  );
}

export default function MyScreenOrientation({ navigation }) {
  return (
    <View style={styles.container}>
        {/* Título */}
        <MyHeader title="Orientação de Tela"/>
        <View style={styles.info}>
          <Button style={styles.button} title="PADRÃO" onPress={padrao}/>
          <Button style={styles.button} title="FORÇAR DEITAR DIREITA" onPress={direita}/>
          <Button style={styles.button} title="FORÇAR DEITAR ESQUERDA" onPress={esquerda}/>
          <Button style={styles.button} title="FORÇAR NORMAL" onPress={normal}/>
          <Button style={styles.button} title="FORÇAR INVERTER" onPress={inverter}/>
          <Button style={styles.button} title="FORÇAR NORMAL2" onPress={normal2}/>
          <Button style={styles.button} title="INFORMAR" onPress={informar}/>
        </View>
        <Footer />
    </View>
  );
}
