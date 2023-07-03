import {Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import { ScrollView } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import MyHeader from "../components/MyHeader";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  info: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
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

export default function MyScreenOrientation({ navigation }) {
  const orientacoes = [
    "PADRÃO",
    "FORÇAR DEITAR DIREITA",
    "FORÇAR DEITAR ESQUERDA",
    "FORÇAR NORMAL",
    "FORÇAR INVERTER",
    "FORÇAR NORMAL2",
    "INFORMAR",
  ];
  
  async function padrao(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT,
      setCoresOrientacoes("red")
    );
  }
  
  async function direita(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
      setCoresOrientacoes("green")
    );
  }
  
  async function esquerda(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
      setCoresOrientacoes("green")
    );
  }
  
  async function normal(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
      setCoresOrientacoes("red")
    );
  }
  
  async function inverter(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN,
      setCoresOrientacoes("white")
    );
  }
  
  async function normal2(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
      setCoresOrientacoes("red")
    );
  }
  
  async function informar(){
    await ScreenOrientation.lockAsync(
      ScreenOrientation.getOrientationAsync(
        console.log(orientacoes[ScreenOrientation.OrientationLock.UNKNOWN])
      )
    );
  }

  const [coresOrientacoes, setCoresOrientacoes] = useState("");

  useEffect(() => {
  }, [coresOrientacoes]);

  return (
    <View style={{
      flex: 1,
      gap: 10,
      backgroundColor: coresOrientacoes,
    }}>
        {/* Título */}
        <MyHeader title="Orientação de Tela"/>
        <ScrollView>
          <View style={styles.info}>
            <Button style={styles.button} title="PADRÃO" onPress={padrao}/>
            <Button style={styles.button} title="FORÇAR DEITAR DIREITA" onPress={direita}/>
            <Button style={styles.button} title="FORÇAR DEITAR ESQUERDA" onPress={esquerda}/>
            <Button style={styles.button} title="FORÇAR NORMAL" onPress={normal}/>
            <Button style={styles.button} title="FORÇAR INVERTER" onPress={inverter}/>
            <Button style={styles.button} title="FORÇAR NORMAL2" onPress={normal2}/>
            <Button style={styles.button} title="INFORMAR" onPress={informar}/>
          </View>
        </ScrollView>
        <Footer />
    </View>
  );
}
