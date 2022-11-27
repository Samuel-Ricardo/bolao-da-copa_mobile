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