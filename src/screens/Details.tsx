import { useRoute } from "@react-navigation/native";
import { HStack, useToast, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Header, IPoolCardProps, Loading, Options, PoolHeader } from "../components";
import { api } from "../server/api";
import { handleCodeShare } from "../utils";

interface IRouteParams { id: string }

export function Details () {
 
  const [optionSelected, setOptionSelected] = useState<'guesses' | 'ranking'>('guesses')

  const [isLoading, setIsLoading] = useState(true)
  const [poolDetails, setPoolDetails] = useState<IPoolCardProps>({} as IPoolCardProps)

  const route = useRoute();
  const toast = useToast();

  const {id} = route.params as IRouteParams;
  
  async function fetchPoolDetails() {
    try
      {
        setIsLoading(true)

        const response = (await api.get(`/pools/${id}`)).data
        setPoolDetails(response.pool);
      }
    catch (error)
      {
        console.log(error)
        
        toast.show({
          title: "Não foi possível carregaro os dados do bolão :/",
          placement: 'top',
          bgColor: 'red.500'
        })
      }
    finally { setIsLoading(false) }

  }

  useEffect(() => { fetchPoolDetails() }, [id])

  if (isLoading) return <Loading/>
 
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header 
        title={poolDetails.title}
        showBackButton
        showShareButton
        onShare={() => handleCodeShare(poolDetails.code)}
      />

    
      { poolDetails._count?.participants > 0 ?

        <VStack px={5} flex={1}>
          <PoolHeader data={poolDetails} />
        
          <HStack bgColor="gray.900" p={1} rounded="sm" mb={8}>
            <Options
              title = 'Seus Palpites'
              isSelected = {optionSelected === 'guesses'}
              onPress = { () => setOptionSelected('guesses') }
            />
            <Options
              title = 'Ranking do Grupo'
              isSelected = {optionSelected === 'ranking'}
              onPress = { () => setOptionSelected('ranking') }
            />
          </HStack>


        </VStack>

      }

    </VStack>
  )
}
