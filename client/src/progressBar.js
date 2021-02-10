import { useState, useEffect } from "react";

export default function ProgressBar({ percentage }) {
    const [progressBar, setProgressBar] = useState({
        height: "20px",
        width: "70vw",
        boxShadow: "0px 0px 10px rgb(100, 149, 237, 0.3)",
        backgroundColor: "white",
        borderRadius: "30px",
        margin: "auto",
    });

    const [bar, setBAr] = useState({
        backgroundColor: "rgb(100, 149, 237)",
        borderRadius: "30px",
        width: `${(percentage * 70) / 100}vw`,
        color: "white",
        minWidth: "2vw",
        maxWidth: "70vw",
        height: "20px",
    });

    const [text, setText] = useState({
        padding: "1px 5px 0 5px",
        textAlign: "right",
        fontSize: "15px",
        fontFamily: "Arial (sans-serif)",
    });

    const [percentValue, setPercentValue] = useState(percentage + "%");

    useEffect(() => {
        if (percentage > 100 || percentage < 0) {
            setProgressBar({
                ...progressBar,
                boxShadow: "0px 0px 10px rgb(242, 30, 30, 0.3)",
            });

            setBAr({
                ...bar,
                backgroundColor: "rgb(242, 30, 30)",
                width: "70vw",
            });

            setText({
                ...text,
                textAlign: "center",
                fontSize: "11px",
            });

            setPercentValue("⚠️");

            console.log(
                "Error in the percentage value, either below 0% or above 100%"
            );
        }
    }, [percentage]);

    return (
        <div style={progressBar}>
            <div style={bar}>
                <p style={text}>{percentValue}</p>
            </div>
        </div>
    );
}
