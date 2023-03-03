import { Box, HStack, Text } from "native-base";
import { CaretLeft, Export } from "phosphor-react-native";
import { ButtonIcon } from './ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../config';

interface IProps {
    title: string;
    showBackButton?: boolean;
    showShareButton?: boolean;
    onShare?: () => void;
}

export function Header(
  { 
    title, 
    showBackButton, 
    showShareButton,
    onShare
  }: IProps){

    const {navigate} = useNavigation();
    const EmptyBoxSpace  = () => (<Box w={6} h={6}/>)

    return (
        <HStack w="full" bgColor="gray.800" alignItems="center" pb={5} px={5}>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                {
                    showBackButton ? <ButtonIcon icon={CaretLeft} onPress={() => navigate(SCREENS.POOLS as never)}/>
                    : <EmptyBoxSpace/>
                }

                <Text color="white" fontFamily="medium" fontSize="md" textAlign="center">
                    {title}
                </Text>
            
                {
                    showShareButton? <ButtonIcon icon={Export} onPress={onShare}/>
                    : <EmptyBoxSpace/> 
                }
            </HStack>
        </HStack>
    )
}
