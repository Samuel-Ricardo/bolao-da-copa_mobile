import { useTheme } from "native-base";
import { IconProps } from "phosphor-react-native/lib/typescript/lib";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";

interface IProps extends TouchableOpacityProps {
    icon: React.FC<IconProps>
}

export function ButtonIcon({ icon: Icon, ...rest}:IProps){
    const {colors, sizes} = useTheme();

    return (
        <TouchableOpacity {...rest}>
            <Icon color={colors.gray[300]} size={sizes[6]}/>
        </TouchableOpacity>
    )
}