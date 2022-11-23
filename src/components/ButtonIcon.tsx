import { IconProps } from "phosphor-react-native/lib/typescript/lib";
import { TouchableOpacityProps } from "react-native";

interface IProps extends TouchableOpacityProps {
    icon: React.FC<IconProps>s
}