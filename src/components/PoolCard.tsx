import { TouchableOpacityProps } from "react-native";
import { IParticipantsProps } from "./Participants";

export interface IPoolProps {
    id: string;
    code: string;
    title: string;
    ownerID: string;
    createdAt: string;
    owner:{
        name: string;
    },
    participants: IParticipantsProps[];
    _count: {
        participants: number;
    }
}

interface IProps extends TouchableOpacityProps {
    data: IPoolProps;
}