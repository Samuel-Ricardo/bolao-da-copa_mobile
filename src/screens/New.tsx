import { Heading, Text, VStack } from "native-base";
import { Button, Header, Input } from "../components";
import Logo from '../assets/logo.svg'

export function New() {
    return (
        <VStack flex={1} bg="gray.900">
            <Header title='Criar novo bolão'/>
            <VStack mt={8} mx={5} alignItems='center'>
                <Logo/>
                <Heading fontFamily="heading" color="white" fontSize="x1" my={8} textAlign="center">
                    Crie seu próprio bolão da copa{'\n'}
                    e compartilhe entre amigos!
                </Heading>

                <Input mb={2} placeholder="Qual o nome do seu bolão"/>

                <Button title="CRIAR MEU BOLÃO"/>

                <Text>
                    Após criar seu bolão, você receberá um código único
                    que poderá usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    )
}