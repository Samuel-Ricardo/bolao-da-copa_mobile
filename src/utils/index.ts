import { Share } from "react-native";

async function handleCodeShare(code: string) {
    await Share.share({ message: code })
}