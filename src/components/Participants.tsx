export interface IParticipantsProps{
    id: string;
    user: {
        name: string;
        avatarUrl: string;
    };
};

interface IProps {
    participants: IParticipantsProps[];
    count: number;
}