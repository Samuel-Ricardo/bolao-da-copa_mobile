import { Share } from "react-native";

export async function handleCodeShare(code: string) {
    await Share.share({ message: code })
}
