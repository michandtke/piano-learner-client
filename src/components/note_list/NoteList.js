import React from "react";
import Guess from "../guess/Guess";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    drawn: {
        display: "flex",
        flexFlow: "column",
        padding: 0,
        margin: 0
    },
    btn: {
        padding: 0
    }
}))

export default function NoteList() {
    const styles = useStyles()

    return (
        <div>
            <Guess note={["f"]}/>
            <Guess note={["d"]}/>
            <Guess note={["h"]}/>
            <Guess note={["e"]}/>
            <Guess note={["g"]}/>
        </div>
    );
}