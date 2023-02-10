import { Stack } from "@mui/material";
import Hint from "./Hint";

const hintAfterGuesses = [4, 8, 12];

export default function HintBox(props: HintBoxProps) {
    return (
        <Stack
            direction="row"
            sx={{
                gap: "15px",
                height: "100px",
                width: "380px",
            }}
        >
            <Hint
                numGuesses={props.numGuesses}
                numReveal={hintAfterGuesses[0]}
                hintType={"skill"}
                content={props.hintContent[0]}
            ></Hint>
            <Hint
                numGuesses={props.numGuesses}
                numReveal={hintAfterGuesses[1]}
                hintType={"constellation"}
                content={props.hintContent[1]}
            ></Hint>
            <Hint
                numGuesses={props.numGuesses}
                numReveal={hintAfterGuesses[2]}
                hintType={"splash"}
                content={props.hintContent[2]}
            ></Hint>
        </Stack>
    );
}

interface HintBoxProps {
    numGuesses: number;
    hintContent: React.ReactNode[];
}
