import { Center, Icon, Text } from 'native-base';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/logo.svg'
import { Button } from '../components';
import { Fontisto } from '@expo/vector-icons';

export function Signin(){

    const { signIn } = useAuth();

    return (
        <Center flex={1} bgColor="black" p={7}>
            <Logo width={212} height={40}/>

            <Button
                type='SECONDARY'
                title='ENTRAR COM GOOGLE'
                leftIcon={<Icon as={Fontisto} name="Google" color='white' size="md"/>}
                mt={12}
                onPress={signIn}
            />

            <Text color='white' textAlign='center' mt={4}>
                Não utilizamos nenhuma informação além{'\n'}
                do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}