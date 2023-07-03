import { StyleSheet, Text, View } from "react-native";
import * as Battery from "expo-battery";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
    headerTextStyle: {
        marginTop: 10,
        color: "white",
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center',
    },
});

export default function MyHeader({title}) {
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

    return(
    <View style={{
        paddingTop: 60,
        backgroundColor: nivelCor,
        paddingBottom: 5,
        paddingHorizontal: 5,
    }}>
        <Text style={styles.headerTextStyle}>
            {title}
        </Text>
    </View>
    );
}