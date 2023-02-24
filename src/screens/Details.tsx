import { useRoute } from "@react-navigation/native";
import { useToast, VStack } from "native-base";
import { useEffect, useState } from "react";
import { IPoolCardProps, Loading } from "../components";
import { api } from "../server/api";

interface IRouteParams { id: string }

export function Details () {
 
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
    <VStack>
      
    </VStack>
  )
}
