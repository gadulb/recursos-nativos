import { Button, StyleSheet, Text, View } from "react-native";
import MyHeader from "../components/MyHeader";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

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
  infoBateria: {
    textAlign: "center",
  },
});

export default function BatteryInfo({ navigation }) {
  const [nivelBateria, setNivelBateria] = useState();
  const [nivelCor, setNivelCor] = useState("green");

  async function atualizarTudo() {
    bateria();
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
    if (nivelBateria >= 80) {
      setNivelCor("green");
    } else {
      if (nivelBateria >= 50) {
        setNivelCor("yellow");
      } else {
        if (nivelBateria >= 30) {
          setNivelCor("orange");
        } else {
          if (nivelBateria >= 1) {
            setNivelCor("red");
          }
        }
      }
    }
  }

  useEffect(() => {
    bateria();
  }, [nivelBateria]);

  return (
    <View style={styles.container}>
      <MyHeader title={"Informações da Bateria"} />
      <View style={styles.info}>
        <Text style={styles.infoBateria}>{nivelBateria} %</Text>
        <View
          style={{ height: 20, width: nivelBateria, backgroundColor: nivelCor }}
        />
        <Button title="Atualizar" onPress={atualizarTudo} />
        {/* <Button title="Informações do Sistema" onPress={() => navigation.navigate("DeviceInfo")} /> */}
      </View>
      <Footer />
    </View>
  );
}
