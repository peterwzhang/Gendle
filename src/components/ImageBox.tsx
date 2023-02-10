import { useState } from "react";
import { Paper } from "@mui/material";
import { getCharacterIcon } from "../utility/api";
import BoxText from "./BoxText";

export default function ImageBox(props: ImageBoxProps) {
    const [showText, setShowText] = useState(false);
    return (
        <Paper
            elevation={1}
            sx={{
                width: 60,
                height: 60,
                // border: 1,
                // borderColor: "white",
                backgroundImage: `url(${getCharacterIcon(props.content)})`,
                backgroundSize: "cover",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
            }}
            onMouseEnter={() => setShowText(true)}
            onMouseLeave={() => setShowText(false)}
        >
            {/* <Typography variant="subtitle2">{props.content}</Typography> */}
            {showText && <BoxText bgColor="#787C7E" content={props.content} />}
        </Paper>
    );
}

interface ImageBoxProps {
    content: string;
}
