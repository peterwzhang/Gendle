import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";

export default function GameDialog(props: GameDialogProps) {
    const { onClose, open, headText, content } = props;

    function handleClose() {
        onClose();
    }
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle sx={{ textAlign: "center" }}>{headText}</DialogTitle>
            <DialogContent>{content}</DialogContent>
            <DialogActions>
                <Button sx={{ width: "100%" }} onClick={handleClose}>
                    {props.btnText}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

interface GameDialogProps {
    open: boolean;
    onClose: () => void;
    headText: string;
    content?: React.ReactNode;
    btnText: string;
}
