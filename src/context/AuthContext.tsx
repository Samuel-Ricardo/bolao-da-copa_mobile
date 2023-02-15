import { createContext, ReactNode, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSessions from 'expo-auth-session'
import {GOOGLE_CLIENT_ID} from '@env'
import { api } from '../server/api';


WebBrowser.maybeCompleteAuthSession();

interface UserProps {
    name: string;
    avatarUrl: string;
}

export interface AuthContextDataProps{
    user: UserProps;
    signIn: () => Promise<void>;
    isUserLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({children}) {
    const [isUserLoading, setIsUserloading] = useState(false);
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: GOOGLE_CLIENT_ID,
        redirectUri: AuthSessions.makeRedirectUri({useProxy: true}),
        scopes: ['profile', 'email']
    });

    

    async function signIn() {
        try {
            setIsUserloading(true)
            await promptAsync();
            
        } catch(err) {
            console.error(err);
            throw err;
        } finally {
            setIsUserloading(false);
        }
    }

    async function signInWithGoogle(access_token: string) {
        console.log('TOKEN DE AUTENTICAÇÃO ====>', access_token);

        try { setIsUserloading(true)
            
            const token = (await api.post('/users', {access_token})).data.token;

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser((await api.get(`/me`)).data);
        
        }
         catch(err) { throw err }
         finally{ setIsUserloading(false) }
    }

    useEffect(() => {
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken);
        }
    }, [response]);

    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}