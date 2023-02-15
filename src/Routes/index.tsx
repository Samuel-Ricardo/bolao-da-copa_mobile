import { Box, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";
import { Signin } from "../screens";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { user } = useAuth();

    return (
        <Box flex={1} bgColor='gray.900'>
            <NavigationContainer>
                {user.name ? <AppRoutes/> : <Signin/>}
            </NavigationContainer>
        </Box>    
    )
}