import { IParticipantsProps } from "./Participants";

export interface IPoolsPros {
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