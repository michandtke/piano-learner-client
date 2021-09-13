import React, {useState} from "react";
import Guess from "../guess/Guess";
import {Button} from "@material-ui/core";


export default function NoteList() {
    const [toGuess, setToGuess] = useState(newRound())

    return (
        <div>
            New round
            <Button variant="contained" color="primary" onClick={() => setToGuess(newRound())}>
                Play
            </Button>

            { toGuess.map(guess => <Guess key={guess.key} note={guess.value}/>) }
        </div>
    );
}

function newRound() {
    const array = producePossibilities()

    const toGuess = array.map(v => ({key: 0.5 - Math.random(), value: v}))
    toGuess.sort(x => x.key);

    return toGuess.slice(0, 5)
}

function producePossibilities() {
    const toGuess2 = ["f", "d", "h", "e", "g"]

    const array = []
    for (let i = 0; i < toGuess2.length; i++) {
        for (let j = i; j < toGuess2.length; j++) {
            array.push(toGuess2.slice(i, j + 1))
        }
    }

    return array
}