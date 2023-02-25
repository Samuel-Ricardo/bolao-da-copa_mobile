import { useNavigation } from "@react-navigation/native";
import { Heading, useToast, VStack } from "native-base";
import { useState } from "react";
import { Button, Header, Input } from "../components";
import { SCREENS } from "../config";
import { api } from "../server/api";

export function Find() {

  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState('');

  const toast = useToast();
  const { navigate } = useNavigation();

  async function handleJoinPool() {
    try { setIsLoading(true)
      
      if(!code.trim()) toast.show({
          title: 'Informe o código',
          placement: 'top',
          bgColor: 'red.500'
        })
      
      await api.post('/pools/join', {code})
      
      toast.show({
        title: "Entrou no bolão com sucesso!",
        placement: "top",
        bgColor: 'green.500'
      })

      navigate(SCREENS.POOLS)
    
    } catch (error) { console.log(error)
      toast.show({
        title: "Ocorreu um erro ao entrar no bolão",
        placement: "top",
        bgColor: 'green.500'
      })

      if(error.response?.data?.message === 'Pool not found.') {
          toast.show({
            title: 'Não foi possível encontrar o bolão',
            placement: 'top',
            bgColor: 'red.500'
          });
        return;
      }

       if(error.response?.data?.message === 'You already joined this poll.') {
          toast.show({
            title: 'Você já está nesse bolão',
            placement: 'top',
            bgColor: 'red.500'
          });
         return;
       }

  } finally { setIsLoading(false) }

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
