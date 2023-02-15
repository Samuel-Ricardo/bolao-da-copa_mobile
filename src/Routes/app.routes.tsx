import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Platform } from "react-native";
import { Find, New, Pools } from "../screens";
import { PlusCircle, SoccerBall } from "phosphor-react-native";
import { SCREENS } from "../config";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes() {
    const {colors, sizes} = useTheme();
    const size = sizes[6]

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: colors.yellow[500],
            tabBarInactiveTintColor: colors.gray[300],
            tabBarStyle: {
                position: 'absolute',
                height: sizes[22],
                borderTopWidth: 0,
                backgroundColor: colors.gray[800],
            },
            tabBarItemStyle:{
                position: 'relative',
                top: Platform.OS === 'android' ? -10 : 0
            }
        }}>
            <Screen name={SCREENS.NEW}
                component={New}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={size}/>,
                    tabBarLabel: "Novo Bolão :D"
                }}
            />

        </Navigator>
    )
}