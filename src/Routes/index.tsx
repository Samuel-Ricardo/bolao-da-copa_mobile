import { Box, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/useAuth";
import { Signin } from "../screens";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { user } = useAuth();

    return (
        <Box>
            <NavigationContainer>
                {user.name ? <AppRoutes/> : <Signin/>}
            </NavigationContainer>
        </Box>    
    )
}