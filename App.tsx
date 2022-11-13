import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World :D!</Text>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontSize: 24
  }
});
