import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import { Loading } from './src/components/Loading';
import { Signin } from "./src/screens";
import { THEME } from "./src/styles/theme";

export default function App() {

  const [loaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

return (
    <NativeBaseProvider theme={THEME}>
      {!loaded? <Loading/> : <Signin/>}
    </NativeBaseProvider>
  );
}