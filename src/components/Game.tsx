interface IGuessProps {
    id: string;
    gameId: string;
    createdAt: string;
    participantId: string;
    firstTeamPoints: number;
    secondTeamPoints: number;
}

interface IGameProps {
    id: string;
    firstTeamCountryCode: string;
    secondTeamCountryCode: string;
    guess: null | IGuessProps;
}

interface IProps {
data: IGameProps;
onGuessConfirm: () => void;
setFirstTeamPoints: (value: string) => void;
setSecondTeamPoints: (value: string) => void;
}

