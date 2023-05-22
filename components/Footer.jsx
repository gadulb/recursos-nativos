import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, View } from "react-native";
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#888",
    paddingHorizontal: 25,
    padding: 20,
  },
});
export default function Footer() {
    const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <Button title="Sair" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
