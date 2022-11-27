import { Icon, VStack } from "native-base";
import { Button, Header } from "../components";
import {Octicons} from '@expo/vector-icons'

export const Pools = _ => (
    <VStack flex={1} bgColor="gray.900">
        <Header title="MEUS BOLÕES"/>
        <VStack>
            <Button 
                title="BUSCAR BOLÃO POR CÓDIGO" 
                leftIcon={<Icon as={Octicons} name="search" color="black" size='md'/>}    
            />
        </VStack>
    </VStack>
)