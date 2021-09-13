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

    const color = !guessed ? "" : guessed === current.toString() ? styles.correct : styles.wrong

    return (
        <div className={styles.guess}>
            <Composed fnCurrentNote={(note) => setCurrent(note)} notes={current}/>
            <div className={styles.input}>
                <TextField onInput={event => setGuessed(event.target.value)}/>
                <br />
                <div className={color}>
                    {guessed}
                </div>
            </div>
        </div>
    );
}