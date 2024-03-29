import { Card, Heading, Text, useToast, VStack } from "native-base";
import { Button, Header, Input } from "../components";
import Logo from '../assets/logo.svg'
import { useState } from 'react'
import { api } from "../server/api";
import { isLoaded } from "expo-font";

export function New() {

  const [title, setTitle] =  useState('')
  const [isLoading, setIsLoading] = useState(false)

  const toast = useToast();

  async function handlePoolCreate(){
    
    if (!title.trim()) return toast.show({
      title: "Informe um nome para o seu bolão",
      placement: 'top',
      bgColor: 'red.500'
    })

    try { setIsLoading(true)

        await api.post('/pools', { title: title.toUpperCase() })
        
        toast.show({
          title: 'Bolão criado com sucesso!',
          placement: 'top',
          bgColor: 'green.500'        
        })

        setTitle('')
      }
    catch (err) 
      { console.log(err)
        
        toast.show({
          title: 'Não foi possível criar o bolão',
          placement: 'top',
          bgColor: 'red.500'
        })
      }

    finally { setIsLoading(false) }
  }

    return (
        <VStack flex={1} bg="gray.900">
            <Header title='Criar novo bolão'/>
            <VStack mt={8} mx={5} alignItems='center'>
                <Logo/>
                <Card fontFamily="heading" color="white" fontSize="x1" my={8} textAlign="center">
                    <Text color={"white"}>
                    Crie seu próprio bolão da copa{'\n'}
                    e compartilhe entre amigos!
                    </Text>
                </Card>

                <Input 
                  mb={2} 
                  placeholder="Qual o nome do seu bolão"
                  onChangeText={setTitle}
                  value={title}
                />

                <Button title="CRIAR MEU BOLÃO" onPress={handlePoolCreate} isLoading={isLoading}/>

                <Text>
                    Após criar seu bolão, você receberá um código único
                    que poderá usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    )
}
