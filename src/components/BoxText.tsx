import { useTheme } from "@mui/material/styles";
import ScaleText from "react-scale-text";

export default function BoxText(props: BoxTextProps) {
    const theme = useTheme();
    return (
        <ScaleText minFontSize={12} maxFontSize={20}>
            <p
                style={{
                    textAlign: "center",
                    padding: "10 5",
                    color: "white",
                    backgroundColor: props.bgColor,
                    fontFamily: theme.typography.fontFamily,
                }}
            >
                {props.content}
            </p>
        </ScaleText>
    );
}

interface BoxTextProps {
    content: string;
    bgColor: string;
}
