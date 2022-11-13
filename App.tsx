import { NativeBaseProvider } from "native-base";
import { StatusBar } from "native-base/lib/typescript/components/basic";
import { Center } from "native-base/lib/typescript/components/composites";
import { Text } from "native-base/lib/typescript/components/primitives";

export default function App() {
return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="black">
        <Text >Hello World :D!</Text>
        <StatusBar/>
      </Center>
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
