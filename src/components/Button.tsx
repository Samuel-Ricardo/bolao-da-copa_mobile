import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface IProps extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({title, type='PRIMARY', ...rest}: IProps) {
    return (
        <ButtonNativeBase
            bg={type === 'PRIMARY' ? 'yellow.500' : 'red.500'}
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            textTransform="uppercase"
            _pressed={{bg: type === 'PRIMARY' ? 'yellow.400' : 'red.400'}}
            _loading={{_spinner: {color: 'black'}}}
            {...rest}
        >
            {title}
        </ButtonNativeBase>
    )
}