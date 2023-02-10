import { Box } from "@mui/material";

export default function PropertyHeader(props: PropertyHeaderProps) {
    return (
        <Box
            sx={{
                width: 60,
                height: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Oswald, sans-serif",
            }}
        >
            {props.category}
        </Box>
    );
}

interface PropertyHeaderProps {
    category: string;
}
