import { useRoute } from "@react-navigation/native";
import { useToast, VStack } from "native-base";
import { useState } from "react";
import { IPoolCardProps } from "../components";

interface IRouteParams { id: string }

export function Details () {
 
  const [isLoading, setIsLoading] = useState(true)
  const [poolDetails, setPoolDetails] = useState<IPoolCardProps>({} as IPoolCardProps)

  const route = useRoute();
  const toast = useToast();

  const {id} = route.params as IRouteParams;
  


  return (
    <VStack>

    </VStack>
  )
}
