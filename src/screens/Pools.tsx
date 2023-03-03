import { FlatList, Icon, VStack, useToast } from "native-base";
import { Button, EmptyPoolList, Header, IPoolCardProps, Loading, PoolCard } from "../components";
import {Octicons} from '@expo/vector-icons'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SCREENS } from "../config";
import { api } from "../server/api";
import { useFocus } from "native-base/lib/typescript/components/primitives";
import { useCallback, useState } from "react";

export const Pools = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [pools, setPools] = useState<IPoolCardProps[]>([])

  const { navigate } = useNavigation();
  const toast = useToast();

  async function fetchPools() {
    
    try {
      setIsLoading(true)

      const response = await api.get('/pools')
      setPools(response.data.pools)
    }

    catch (e) {
      console.log(e)

      toast.show({
        title: 'Não foi possível carregar os bolões',
        placement: 'top',
        bgColor: 'red.500'
      })
    }

    finally { setIsLoading(false) }
  }

  useFocusEffect(useCallback(() => {fetchPools()}, []))

  return (
    <VStack flex={1} bgColor="gray.900">
        <Header title="MEUS BOLÕES"/>
        <VStack  mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
            <Button 
                title="BUSCAR BOLÃO POR CÓDIGO" 
                leftIcon={<Icon as={Octicons} name="search" color="black" size='md'/>}
                onPress={() => navigate(SCREENS.FIND as never)}    
            />
        </VStack>

        { isLoading? <Loading/> :

          <FlatList
            data={pools}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>  (
              <PoolCard
                data={item}
                onPress={() => navigate(SCREENS.DETAILS, { id: item.id })}
              />
            )}
            ListEmptyComponent={ <EmptyPoolList/> }
            showsVerticalScrollIndicator={false}
            _contentContainerStyle={{ pb:10 }}
            px={5}
          />
        }
    </VStack>
  )
}
