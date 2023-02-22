import { createTheme, Stack, ThemeOptions, ThemeProvider } from "@mui/material";
import Game from "./components/Game";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#9c27b0",
        },
        background: {
            default: "#fff",
            paper: "#fff",
        },
        info: {
            main: "#787c7e",
        },
        success: {
            main: "#6aaa64",
        },
    },
    typography: {
        fontFamily: '"Oswald", sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={themeOptions}>
            <Stack alignItems="center" spacing={3}>
                <Game />
            </Stack>
        </ThemeProvider>
    );
}

export default App;
