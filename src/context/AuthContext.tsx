import { createContext, ReactNode, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSessions from 'expo-auth-session'
import { Signin } from '../screens/Signin';

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
        clientId: "",
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

    async function signInWithGoogle(accessToken: string) {
        console.log('TOKEN DE AUTENTICAÇÃO ====>', accessToken);
    }


}