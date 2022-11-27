import { FlatList, useToast } from 'native-base';
import { useState, useEffect } from 'react';
import { api } from '../server/api';
import { Game, IGameProps } from './Game';
import { Loading } from './Loading';

export function Guesses(poolId: string) {
    const [isLoading, setIsLoading] = useState(true)
    const [games, setGames] = useState<IGameProps[]>([])
    const [firstTeamPoints, setFirstTeamPoints] = useState('')
    const [secondTeamPoints, setSecondTeamPoints] = useState('')
    
    
}