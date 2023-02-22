import { Stack, useTheme } from "@mui/material";
import ImageBox from "./ImageBox";
import PropertyBox from "./PropertyBox";

const charProps: (keyof Character)[] = [
    "vision",
    "weapon",
    "nation",
    "affiliation",
    "rarity",
];

export default function CharacterRow({ answer, charGuess }: CharacterRowProps) {
    const theme = useTheme();
    return (
        <Stack direction="row" spacing={2}>
            <ImageBox content={charGuess.name} />
            {charProps.map((property, i) => (
                <PropertyBox
                    key={i}
                    color={
                        answer[property] === charGuess[property]
                            ? theme.palette.success.main
                            : theme.palette.info.main
                    }
                    content={charGuess[property].toString()}
                />
            ))}
        </Stack>
    );
}

interface CharacterRowProps {
    charGuess: Character;
    answer: Character;
}
