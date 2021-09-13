import React, {useState} from "react";
import Composed from "../composed/Composed";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    guess: {
        padding: 30
    }
}))

export default function Guess({note}) {
    const styles = useStyles()
    const [current, setCurrent] = useState(note)

    return (
        <div className={styles.guess}>
            <Composed fnCurrentNote={(note) => setCurrent(note)} notes={current}/>
        </div>
    );
}