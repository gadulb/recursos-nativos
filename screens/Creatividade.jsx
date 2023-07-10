import { Button, StyleSheet, View } from "react-native";
import MyHeader from "../components/MyHeader";
import Footer from "../components/Footer";
import * as ScreenOrientation from "expo-screen-orientation";
import { Text } from "react-native-paper";
import { useEffect, useState } from "react";
import * as Battery from "expo-battery";

export default function Criatividade({ navigation }) {
    const [coresOrientacoes, setCoresOrientacoes] = useState("white");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            gap: 10,
        },
        cor: {
            backgroundColor: coresOrientacoes,
            flex: 1,
        },
        info: {
            flex: 1,
            gap: 20,
            padding: 20,
            alignSelf: "center",
            justifyContent: "center",
        },
    });
    
    async function normal(){
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.DEFAULT,
            setCoresOrientacoes("white")
        );
    }
    
    async function padrao(){
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.DEFAULT,
            setCoresOrientacoes("yellow")
        );
    }

    async function direita(){
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
          setCoresOrientacoes("blue")
        );
    }
      
    async function esquerda(){
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE_LEFT,
            setCoresOrientacoes("pink")
        );
    }
      
    async function inverter(){
        await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_DOWN,
            setCoresOrientacoes("brown")
        );
    }

    const [nivelBateria, setNivelBateria] = useState();

    async function atualizarTudo() {
        bateria();
    }

    async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync();
        setNivelBateria(nivel * 100);
        if (nivelBateria >= 80) {
            padrao(setCoresOrientacoes("yellow"));
        } else {
            if (nivelBateria >= 50) {
                direita(setCoresOrientacoes("blue"));
            } else {
                if (nivelBateria >= 30) {
                esquerda(setCoresOrientacoes("pink"));
                } else {
                    if (nivelBateria >= 1) {
                        inverter(setCoresOrientacoes("brown"));
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
            <MyHeader title={'Criatividade'} />
            <View style={styles.cor}>
                <View style={styles.info}>
                    <Text>CRIATIVIDADE</Text>
                    <Button title="Voltar ao Normal" onPress={normal} />
                    <Button title="Atualizar" onPress={atualizarTudo} />
                </View>
            </View>
            <Footer />
        </View>
    )
}