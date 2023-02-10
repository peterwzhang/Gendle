import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import { getCharacterIcon } from "../utility/api";

export default function CharacterSelector(props: CharacterSelectorProps) {
    function changeHandler(
        event: React.SyntheticEvent<Element, Event>,
        value: string | null
    ) {
        // console.log(value);
        if (!value) return;
        props.setChar(value);
    }
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.btnHandler();
            }}
        >
            <Stack direction="row">
                <Autocomplete
                    autoHighlight
                    clearOnEscape
                    filterSelectedOptions
                    value={props.selectedChar}
                    sx={{
                        width: 300,
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#787C7E",
                        },
                    }}
                    options={Array.from(props.characterList)}
                    onChange={changeHandler}
                    getOptionLabel={(option) => option}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                        >
                            <img
                                loading="eager"
                                width="40"
                                src={getCharacterIcon(option)}
                                alt={option}
                            />
                            {option}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Enter a character's name:"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password", // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
                <Button
                    variant="outlined"
                    sx={{
                        color: "black",
                        borderColor: "#6AAA64",
                    }}
                    onClick={props.btnHandler}
                >
                    Enter
                </Button>
            </Stack>
        </form>
    );
}

interface CharacterSelectorProps {
    btnHandler: () => void;
    selectedChar: string;
    setChar: React.Dispatch<React.SetStateAction<string>>;
    characterList: Set<string>;
}
