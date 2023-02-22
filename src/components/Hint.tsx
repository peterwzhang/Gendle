import { Paper, Stack, Typography, useTheme } from "@mui/material";

import React from "react";
import GameDialog from "./GameDialog";

export default function Hint(props: HintProps) {
    const [open, setOpen] = React.useState(false);
    const hintAvailable = props.numReveal - props.numGuesses <= 0;
    const theme = useTheme();
    function handleClose() {
        setOpen(false);
    }
    function handleClick() {
        if (!hintAvailable) return;
        setOpen(true);
    }
    return (
        <>
            <Paper
                component={Stack}
                variant="outlined"
                sx={{
                    flex: "1",
                    alignItems: "center",
                    borderColor: hintAvailable
                        ? theme.palette.success.main
                        : theme.palette.info.main,
                    borderWidth: "2px",
                    // fontFamily: "Oswald, sans-serif",
                }}
                onClick={handleClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2.5 24 24"
                    width="24"
                    fill={
                        hintAvailable
                            ? theme.palette.success.main
                            : theme.palette.info.main
                    }
                >
                    <path d="M10 13.554l3.517 1.85-.672-3.917 2.846-2.774-3.932-.571L10 4.579 8.241 8.142l-3.932.571 2.846 2.774-.672 3.916L10 13.554zm0 2.26L3.827 19.06l1.179-6.875L.01 7.317l6.902-1.003L10 .06l3.087 6.254 6.902 1.003-4.995 4.868 1.18 6.875L10 15.814z"></path>
                </svg>
                <Typography sx={{ margin: "0 4px", textAlign: "center" }}>
                    {hintAvailable
                        ? `click to show ${props.hintType} hint`
                        : `${props.hintType} hint in ${
                              props.numReveal - props.numGuesses
                          } tries`}
                </Typography>
            </Paper>
            <GameDialog
                open={open}
                onClose={handleClose}
                headText={`${props.hintType} hint`}
                content={props.content}
                btnText="Got it!"
            ></GameDialog>
        </>
    );
}

interface HintProps {
    numGuesses: number;
    numReveal: number;
    hintType: string;
    content?: React.ReactNode;
}
