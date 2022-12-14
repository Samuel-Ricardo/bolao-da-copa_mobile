import { Pressable, Row, Text } from "native-base";

export function EmptyPoolList() {
    return (
        <Row flexWrap="wrap" justifyContent="center">
            <Text color="white" fontSize="sm" textAlign="center">
                Você ainda não está participando de {'\n'} nenhum bolão, que tal 
            </Text>

            <Pressable>
                <Text>
                    Buscar um pelo código
                </Text>
            </Pressable>

            <Text color="white" fontSize="sm" textAlign="center" mx={1}>
                ou
            </Text>

            <Pressable>
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