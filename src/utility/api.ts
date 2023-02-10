import { characterURLMap } from "../data/characters";

const API_LINK = "https://api.genshin.dev";

export function getCharacterURL(name: string) {
    return `${API_LINK}/characters/${characterURLMap.get(name)}`;
}

export function getCharacterIcon(name: string) {
    return `${getCharacterURL(name)}/icon-big`;
}

export function getCharacterConst(name: string) {
    return `${getCharacterURL(name)}/constellation`;
}
export function getCharacterPortrait(name: string) {
    return `${getCharacterURL(name)}/portrait`;
}

export function getCharacterSplash(name: string) {
    return `${getCharacterURL(name)}/gacha-splash`;
}
