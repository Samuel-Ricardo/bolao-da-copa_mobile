import { ButtonProps } from "react-native";

interface IProps extends ButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

