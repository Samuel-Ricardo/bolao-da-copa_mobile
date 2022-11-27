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
    
    const toast = useToast();

    async function fetchGames() {
        try {
            setIsLoading(true)

            const response = await api.get(`/pools/${poolId}/games`)
            setGames(response.data.games);
            console.log(response.data.games);
        } catch(err) {
            toast.show({
                title: "Não foi possível listar os jogos :/",
                placement: 'top',
                bgColor: 'red.500'
            });
        } finally {
            setIsLoading(false)
        }
    }

    async function handleGuessConfirm(gameId: string) {
        try {
            if(!firstTeamPoints || !secondTeamPoints) {
                return toast.show({
                    title: 'Informe o placar para palpitar',
                    placement: 'top',
                    bgColor: 'red.500'
                });
            }

            await api.post(`/pools/${poolId}/games/${gameId}/guesses`, {
                firstTeamPoints: Number(firstTeamPoints),
                secondTeamPoints: Number(secondTeamPoints)
            });

            toast.show({
                title: "Palpite realizado com sucesso",
                placement: 'top',
                bgColor: 'green.500'
            });

            fetchGames();
        } catch(err) {
            console.log(err);

            toast.show({
                title: 'Não foi possível enviar o palpite',
                placement: 'top',
                bgColor: 'red.500'
            });
        }
    }


}