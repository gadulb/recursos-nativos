import { StyleSheet, View } from 'react-native';
import DeviceInfo from './screens/DeviceInfo';
import Exemplo from './screens/Exemplo';
import BatteryInfo from './screens/BatteryInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <BatteryInfo/>
    </View>
  );
}