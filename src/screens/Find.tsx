import { useNavigation } from "@react-navigation/native";
import { Heading, useToast, VStack } from "native-base";
import { useState } from "react";
import { Button, Header, Input } from "../components";

export function Find() {

  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState('');

  const toast = useToast();
  const { navigate } = useNavigation();

    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Buscar por código" showBackButton/>

            <VStack mt={8} mx={5} alignItems="center">
                <Heading fontFamily="heading" color="white" fontSize="x1" mb={8} textAlign="center">
                    Encontre um bolão através de{'\n'}
                    seu código único  
                </Heading>

                <Input mb={2} placeholder="Qual o código do bolão?"/>

                <Button title="BUSCAR POR CÓDIGO"/>
            </VStack>
        </VStack>
    )
}
