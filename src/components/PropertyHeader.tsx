import { Box, Typography } from "@mui/material";

export default function PropertyHeader(props: PropertyHeaderProps) {
    return (
        <Box
            sx={{
                width: 60,
                height: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography>{props.category}</Typography>
        </Box>
    );
}

interface PropertyHeaderProps {
    category: string;
}
