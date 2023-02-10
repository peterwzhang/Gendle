import ScaleText from "react-scale-text";

export default function BoxText(props: BoxTextProps) {
    return (
        <ScaleText minFontSize={12} maxFontSize={20}>
            <p
                style={{
                    textAlign: "center",
                    padding: "10 5",
                    color: "white",
                    backgroundColor: props.bgColor,
                    fontFamily: "Oswald, sans-serif",
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
