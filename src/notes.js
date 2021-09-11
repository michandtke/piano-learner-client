import React, {useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import try_middle from './try_middle.png';
import one_blank from './one_blank.png';
import {Icon} from "./Icon";

const useStyles = makeStyles(() => ({
    note: {
        display: "flex",
        alignContent: "space-between",
        width: "100%"
    },
    drawn: {
        display: "flex",
        flexFlow: "column",
        padding: 0,
        margin: 0
    },
    level: {
        height: "5px",
        lineHeight: "5px",
        backgroundColor: "white",
        textDecoration: "line-through"
    },
    btn: {
        padding: 0
    }
}))

export default function Notes() {
    const [notes, setNotes] = useState([])
    const [current, setCurrent] = useState("")
    const styles = useStyles()
    return (
        <div>
            <Button variant="contained" onClick={() => loadNotes(setNotes)}>LOAD</Button>
            Hello my nodes:
            {
                notes.map(note => singleNote(note, styles, setCurrent))
            }
            <br />
            {current}
            {drawNote(null, styles, setCurrent)}
        </div>
    );
}

function singleNote(note, styles, setCurrent) {
    if (note.id === 3)
    return (
        <div className={styles.note}>
            <div>
                id: {note.id}
            </div>
            <div>
                name: {note.name}
            </div>
            <div>
                clef: {note.clef}
            </div>
            <div>
                level: {note.level}
            </div>
            <div>
                {drawNote(note, styles, setCurrent)}
            </div>
        </div>
    )
}

function drawNote(note, styles, setCurrent) {
    return (
        <div className={styles.drawn}>
            {emptyButton(() => setCurrent("F"), styles)}
            {emptyButton(() => setCurrent("D"), styles)}
            {emptyButton(() => setCurrent("H"), styles)}
            {emptyButton(() => setCurrent("G"), styles)}
            {emptyButton(() => setCurrent("E"), styles)}
        </div>
    )
}

function emptyButton(doin, styles) {
    return (
        <Button onClick={doin} className={styles.btn}>
            <Icon src={one_blank} srcOnHover={try_middle} alt="what"/>
        </Button>
    )
}

function loadNotes(setNotes) {
    const URL = "http://localhost:8080/notes"
    axios.get(URL).then(function (resp) {
        console.log(resp.data._embedded.noteList)
        setNotes(resp.data._embedded.noteList)
        return resp
    }).catch(error => console.log(error))
}