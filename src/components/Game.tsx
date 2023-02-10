import {
    CircularProgress,
    DialogContentText,
    Paper,
    Stack,
} from "@mui/material";
import PropertyHeader from "./PropertyHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterSelector from "./CharacterSelector";
import CharacterRow from "./CharacterRow";
import {
    getCharacterConst,
    getCharacterPortrait,
    getCharacterSplash,
    getCharacterURL,
} from "../utility/api";
import HintBox from "./HintBox";
import { difference, randomItem } from "../utility/functions";
import { characters } from "../data/characters";
import GameDialog from "./GameDialog";

export default function Game() {
    const [answer, setAnswer] = useState<null | Character>(null);
    const [guesses, setGuesses] = useState<[] | Character[]>([]);
    const [charChoices, setCharChoices] = useState<Set<string>>(
        new Set<string>([])
    );
    const [selectedChar, setChar] = useState("");
    const [winScreenOpen, setWSOpen] = useState(false);

    useEffect(() => {
        setupGame();
    }, []);

    function setupGame() {
        setWSOpen(false);
        setGuesses([]);
        const randCharacter = randomItem(characters);
        getCharacter(randCharacter).then((value) => {
            setAnswer(value);
        });
        setCharChoices(new Set<string>(characters));
    }

    function guessHandler() {
        if (selectedChar === "") return;
        setCharChoices(difference(charChoices, [selectedChar]));
        setChar(""); // todo: look into MUI warning
        getCharacter(selectedChar).then((value) => {
            setGuesses([value, ...guesses]);
            if (selectedChar === answer?.name) setWSOpen(true);
        });
    }

    if (answer === null) return <CircularProgress />;
    return (
        <>
            <Paper
                component={Stack}
                elevation={24}
                gap={2}
                sx={{
                    height: "80vh",
                    alignItems: "center",
                    p: "1.5rem",
                }}
            >
                <CharacterSelector
                    characterList={charChoices}
                    btnHandler={guessHandler}
                    selectedChar={selectedChar}
                    setChar={setChar}
                ></CharacterSelector>
                <HintBox
                    numGuesses={guesses.length}
                    hintContent={generateHintContent(answer)}
                />
                <Stack direction="row" spacing={2}>
                    <PropertyHeader category="Character" />
                    <PropertyHeader category="Vision" />
                    <PropertyHeader category="Weapon" />
                    <PropertyHeader category="Nation" />
                    <PropertyHeader category="Affiliation" />
                    <PropertyHeader category="Rarity" />
                </Stack>
                <Stack
                    spacing={2}
                    sx={{
                        overflow: "hidden",
                        overflowY: "auto",
                        height: "100%",
                        width: "100%",
                        "&::-webkit-scrollbar": {
                            display: "none",
                        },
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                >
                    {guesses.map((char, i) => (
                        <CharacterRow
                            key={i}
                            charGuess={char}
                            answer={answer}
                        ></CharacterRow>
                    ))}
                </Stack>
            </Paper>
            <GameDialog
                open={winScreenOpen}
                onClose={setupGame}
                headText={`Congrats! It's ${answer.name}`}
                content={generateWinContent(answer)}
                btnText="Play Again"
            ></GameDialog>
        </>
    );
}

async function getCharacter(charName: string): Promise<Character> {
    try {
        const res = await axios.get<Character>(getCharacterURL(charName));
        return res.data;
    } catch (err) {
        // console.log(err);
        throw err;
    }
}

function generateHintContent(character: Character): React.ReactNode[] {
    const randomSkill = randomItem(character.skillTalents);
    const skillHint = (
        <DialogContentText>{`${randomSkill["type"]} - ${randomSkill["name"]}`}</DialogContentText>
    );
    const constellationHint = (
        <img
            width={300}
            src={getCharacterConst(character.name)}
            alt="constellation hint"
            // alt={`${character.name} constellation`}
        ></img>
    );
    const splashHint = (
        <div
            style={{
                height: 300,
                width: 300,
                backgroundImage: `url(${getCharacterSplash(character.name)})`,
                backgroundPosition: `${randomItem([
                    "bottom",
                    "top",
                ])} ${randomItem(["left", "right"])}`,
                backgroundSize: "742px 512px",
            }}
        ></div>
    );
    return [skillHint, constellationHint, splashHint];
}

function generateWinContent(character: Character): React.ReactNode {
    return (
        <img
            width={300}
            src={getCharacterPortrait(character.name)}
            alt={`${character.name} Portrait`}
        ></img>
    );
}
