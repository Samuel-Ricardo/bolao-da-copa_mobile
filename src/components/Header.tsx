import { Box, HStack, Text } from "native-base";
import { CaretLeft, Export } from "phosphor-react-native";
import { ButtonIcon } from './ButtonIcon';

interface IProps {
    title: string;
    showBackButton?: boolean;
    showShareButton?: boolean;
}

export function Header({ title, showBackButton, showShareButton}: IProps){
    const EmptyBoxSpace  = () => (<Box w={6} h={6}/>)

    return (
        <HStack w="full" bgColor="gray.800" alignItems="center" pb={5} px={5}>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                {
                    showBackButton ? <ButtonIcon icon={CaretLeft}/>
                    : <EmptyBoxSpace/>
                }

                <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
                    {title}
                </Text>
            
                {
                    showShareButton? <ButtonIcon icon={Export}/>
                    : <EmptyBoxSpace/> 
                }
            </HStack>
        </HStack>
    )
}