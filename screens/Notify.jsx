import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import * as Notifications from "expo-notifications";
import { useState, useEffect } from "react";
import MyHeader from "../components/MyHeader";
import * as Battery from "expo-battery";
import * as Device from "expo-device";
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native";

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
  const [tituloNoti, setTituloNoti] = useState("");
  const [subtituloNoti, setSubtituloNoti] = useState("");

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
          body: `Seu ${Device.deviceName} é excelente!`,
      },
      trigger: { seconds: 2 },
  });
  setTituloNoti(title);
  setSubtituloNoti(subtitle);
  setExpoToken(token);
  }

  const ultimaNotificacao = Notifications.useLastNotificationResponse();

  async function exibirAlerta() {
    const idToken = ultimaNotificacao.notification.request.identifier;
    alert('Atenção! ' + idToken)
    console.log(idToken);
  }
  
  useEffect(() => {
    exibirAlerta();
  }, [ultimaNotificacao]);

  async function lerNotificacao() {
    const ultimaNotificacao = await Notifications.getLastNotificationResponseAsync();
    alert(ultimaNotificacao.notification.request.identifier);
    console.log(ultimaNotificacao);
  }
  
  async function mudarPagina() {
    const idToken = ultimaNotificacao.notification.request.identifier;
    alert('Atenção! ' + idToken)
    console.log(idToken);
    if (idToken == expoToken) {
      navigation.navigate("Home");
    }
  }

  async function EnvieSuaNoti() {
    const token = await Notifications.scheduleNotificationAsync({
        content: {
            title: tituloNoti,
            subtitle: subtituloNoti,
            body: `Essa é sua notificacão!`,
        },
        trigger: { seconds: 1 },
    });
    setExpoToken(token);
    console.log('Enviei a notificação');
  }
  
  useEffect(() => {
    mudarPagina();
  }, [ultimaNotificacao]);

  return (
    <View style={styles.container}>
      <MyHeader title={"Notificações"} />
      <View style={styles.body}>
        <ScrollView style={styles.body}>
        <Text>Expo token: {expoToken}</Text>
        <Button title="Enviar Nootificação" onPress={async () => notificarExpo()} />
        <Text>Bateria: {nivel}</Text>
        <Button title="Nivel Bateria" onPress={async () => NivelBateria()} />
        <Text>Nome do aparelho: {Device.deviceName}</Text>
        <Button title="Nome do aparelho" onPress={async () => NomeAparelho()} />
        <Button title="Última notificação" onPress={async () => lerNotificacao()}/>
        <Text>Envie sua notificação: </Text>
        <TextInput 
          label="Digite o título da sua notificação"
          value={tituloNoti}
          onChangeText={tituloNoti => setTituloNoti(tituloNoti)}
        />
        <TextInput 
          label="Digite o subtítulo da sua notificação"
          value={subtituloNoti}
          onChangeText={subtituloNoti => setSubtituloNoti(subtituloNoti)}
        />
        <Button title="Enviar sua notificação" onPress={async () => EnvieSuaNoti()}/>
        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}
