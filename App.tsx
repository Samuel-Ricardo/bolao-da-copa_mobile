import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { NativeBaseProvider, StatusBar } from 'native-base';
import { Loading } from './src/components/Loading';
import { AuthContextProvider } from "./src/context/AuthContext";
import { THEME } from "./src/styles/theme";
import { Routes } from "./src/Routes";

export default function App() {

  const [loaded] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />

        {loaded? <Routes/> : <Loading/>}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}