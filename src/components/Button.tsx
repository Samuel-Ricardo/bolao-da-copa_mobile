import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

interface IProps extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({title, type='PRIMARY', ...rest}: IProps) {
    return (
        <ButtonNativeBase>
            {title}
        </ButtonNativeBase>
    )
}