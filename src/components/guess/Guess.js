import React, {useState} from "react";
import Composed from "../composed/Composed";
import {makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    guess: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    input: {
        paddingLeft: 15
    },
    correct: {
        backgroundColor: "green"
    },
    wrong: {
        backgroundColor: "red"
    }
}))

export default function Guess({note}) {
    const styles = useStyles()
    const [current, setCurrent] = useState(note)
    const [guessed, setGuessed] = useState("")

    return (
        <div className={styles.guess}>
            <Composed fnCurrentNote={(note) => setCurrent(note)} notes={current}/>
            <div className={styles.input}>
                <TextField onInput={event => setGuessed(event.target.value)}/>
                <br />
                <div className={calculateColor(guessed, current, styles)}>
                    {guessed}
                </div>
            </div>
        </div>
    );
}

function calculateColor(guessed, current, styles) {
    return !guessed ? "" : checkCorrect(guessed, current) ? styles.correct : styles.wrong
}

function checkCorrect(guessed, current) {
    const regex = /[a-zA-Z]/gm;
    const splitted = guessed.match(regex)

    const currentSorted = current.map(v => v.toLowerCase()).sort();
    const splittedSorted = splitted.map(v => v.toLowerCase()).sort();
    return current.length === splitted.length && currentSorted.every(function(value, index) {
        return value === splittedSorted[index];
    });
}