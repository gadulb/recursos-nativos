import React, { useCallback, useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Footer from "../components/Footer";
import * as Contacts from "expo-contacts";
import MyHeader from "../components/MyHeader";
import Items from "../components/Items";
import * as Notifications from "expo-notifications";

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
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    carregarContatos();
  }, []);

  const carregarContatos = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
      });
      setContacts(data);
      setFilteredContacts(data);
    }
  };

  const filterContacts = (text) => {
    setSearchText(text);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleContactPress = useCallback(async (name, number) => {
    try {
      const notificationContent = {
        title: "Novo contato",
        body: `Nome: ${name}\nNúmero: ${number}`,
      };

      const response = Notifications.scheduleNotificationAsync({
        content: notificationContent,
        trigger: { seconds: 2 },
      });

      if (response) {
        console.log("Notificação agendada com sucesso");
        response;
      } else {
        console.log("Falha ao agendar notificação");
      }
    } catch (error) {
      console.log("Erro ao enviar notificação:", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <MyHeader title={"Contatos"} />
      <View style={styles.body}>
        <Text>Contatos</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Filtrar por nome"
          value={searchText}
          onChangeText={filterContacts}
        />
        <View>
          {filteredContacts.length > 0 ? (
            <FlatList
              style={{ flex: 1, gap: 10 }}
              data={filteredContacts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Items item={item} handleContactPress={handleContactPress} />
              )}
            />
          ) : (
            <Text>Nenhum contato encontrado.</Text>
          )}
        </View>
      </View>
      <Footer />
    </View>
  );
}
