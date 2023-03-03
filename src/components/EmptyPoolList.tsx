import { useNavigation } from "@react-navigation/native";
import { SCREENS } from '../config'
import { Pressable, Row, Text } from "native-base";

export function EmptyPoolList() {

  const { navigate } = useNavigation();

    return (
        <Row flexWrap="wrap" justifyContent="center">
            <Text color="white" fontSize="sm" textAlign="center">
                Você ainda não está participando de {'\n'} nenhum bolão, que tal 
            </Text>

            <Pressable onPress={() => navigate(SCREENS.FIND as never)}>
                <Text textDecoration="underline" color="yellow.500">
                    Buscar um pelo código
                </Text>
            </Pressable>

            <Text color="white" fontSize="sm" textAlign="center" mx={1}>
                ou
            </Text>

            <Pressable onPress={() => navigate(SCREENS.NEW as never)}>
                <Text textDecoration="underline" color="yellow.500">
                    criar um novo
                </Text>
            </Pressable>

            <Text color="white" fontSize="sm" textAlign="center">
                ?
            </Text>
        </Row>
    )
}
