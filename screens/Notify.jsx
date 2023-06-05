import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import * as Notifications from "expo-notifications";
import { useState, useEffect } from "react";
import MyHeader from "../components/MyHeader";
import * as Battery from "expo-battery";
import * as Device from "expo-device";
// import DeviceInfo from "react-native-device-info";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  content: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
  },
  contentTextStyle: {
    padding: 5,
    textAlignVertical: "center",
    minHeight: 50,
    backgroundColor: "#969",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  body: {
    flex: 1,
    gap: 20,
    padding: 20,
    alignSelf: "center",
  },
});

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState("");
  const [nivel, setNivelBateria] = useState("");
  const [nome, setNomeAparelho] = useState("");

  useEffect(() => {
    bateria();
  }, []);

  async function notificarExpo() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Enviar Notificação",
        subtitle: "Subtitulo",
        body: "Texto bla bla bla",
      },
      trigger: { seconds: 2 },
    });
    setExpoToken(token);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  async function NivelBateria() {
    const token = await Notifications.scheduleNotificationAsync({
      content: {
        title: "Nivel Bateria",
        subtitle: "Subtitulo",
        body: `Nível da bateria: ${nivel}%`,
      },
      trigger: { seconds: 2 },
    });
    setExpoToken(token);
  }

    async function NomeAparelho() {
    const token = await Notifications.scheduleNotificationAsync({
        content: {
            title: "Nome do Aparelho",
            subtitle: "Subtitulo",
            body: `Nome do aparelho: ${Device.deviceName}`,
        },
        trigger: { seconds: 2 },
    });
    setExpoToken(token);
    }

  return (
    <View style={styles.container}>
      <MyHeader title={"Notificações"} />
      <View style={styles.body}>
        <Text>Expo token: {expoToken}</Text>
        <Button title="Enviar Nootificação" onPress={async () => notificarExpo()} />
        <Text>Bateria: {nivel}</Text>
        <Button title="Nivel Bateria" onPress={async () => NivelBateria()} />
        <Text>Nome do aparelho: {Device.deviceName}</Text>
        <Button title="Nome do aparelho" onPress={async () => NomeAparelho()} />
        <Button title="Ter última notificação clicada" />
        <Button title="Ter notificações não clicadas" />
      </View>
      <Footer />
    </View>
  );
}
