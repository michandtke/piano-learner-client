import React from "react";
import Guess from "../guess/Guess";


export default function NoteList() {
    const toGuess = ["f", "d", "h", "e", "g"]

    toGuess.sort(function(){
        return 0.5 - Math.random();
    });

    return (
        <div>
            { toGuess.map(guess => <Guess note={[guess]}/>) }
        </div>
    );
}