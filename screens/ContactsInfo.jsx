import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Footer from "../components/Footer";
import * as Contacts from "expo-contacts";
import MyHeader from "../components/MyHeader";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
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

export default function ContactsInfo({ navigation }) {
    const [contacts, setContacts] = useState([]);

    async function carregarContatos() {
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails, 
                Contacts.Fields.PhoneNumbers
            ]
        })
        setContacts(data);
        console.log(data);
    }

    useEffect((
        useCallback(() => {
            (async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === "granted") {
                    carregarContatos();
                }
            })();
        })
    ), []);
    


  return (
    <View style={styles.container}>
      <MyHeader title={"Contatos"} />
      <View style={styles.body}>
        <Text>Contatos</Text>
        <View>
            {
                contacts
                ? <FlatList
                    style={{flex: 1, gap: 10}}
                    data={contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        <Items
                         item={item}
                        />
                    }}
                />
                : <></>
            }
        </View>
      </View>
      <Footer />
    </View>
  );
}
