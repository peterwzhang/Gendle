import { Paper } from "@mui/material";
import BoxText from "./BoxText";

export default function PropertyBox(props: PropertyBoxProps) {
    return (
        <Paper
            elevation={1}
            sx={{
                width: 60,
                height: 60,
                backgroundColor: props.color,
                display: "flex",
                alignItems: "center",
            }}
        >
            <BoxText bgColor="none" content={props.content} />
        </Paper>
    );
}

interface PropertyBoxProps {
    color: string;
    content: string;
}
