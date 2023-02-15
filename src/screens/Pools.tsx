import { Icon, VStack } from "native-base";
import { Button, Header } from "../components";
import {Octicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from "../config";

export const Pools = _ => (
    <VStack flex={1} bgColor="gray.900">
        <Header title="MEUS BOLÕES"/>
        <VStack  mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
            <Button 
                title="BUSCAR BOLÃO POR CÓDIGO" 
                leftIcon={<Icon as={Octicons} name="search" color="black" size='md'/>}
                onPress={() => useNavigation().navigate(SCREENS.FIND as never)}    
            />
        </VStack>
    </VStack>
)