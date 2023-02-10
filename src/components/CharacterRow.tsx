import { Stack } from "@mui/material";
import ImageBox from "./ImageBox";
import PropertyBox from "./PropertyBox";
export default function CharacterRow({ answer, charGuess }: CharacterRowProps) {
    return (
        <Stack direction="row" spacing={2}>
            <ImageBox content={charGuess.name} />
            <PropertyBox
                color={
                    answer.vision === charGuess.vision ? "#6AAA64" : "#787C7E"
                }
                content={charGuess.vision}
            />
            <PropertyBox
                color={
                    answer.weapon === charGuess.weapon ? "#6AAA64" : "#787C7E"
                }
                content={charGuess.weapon}
            />
            <PropertyBox
                color={
                    answer.nation === charGuess.nation ? "#6AAA64" : "#787C7E"
                }
                content={charGuess.nation}
            />
            <PropertyBox
                color={
                    answer.affiliation === charGuess.affiliation
                        ? "#6AAA64"
                        : "#787C7E"
                }
                content={charGuess.affiliation}
            />
            <PropertyBox
                color={
                    answer.rarity === charGuess.rarity ? "#6AAA64" : "#787C7E"
                }
                content={charGuess.rarity.toString()}
            />
        </Stack>
    );
}

interface CharacterRowProps {
    charGuess: Character;
    answer: Character;
}
