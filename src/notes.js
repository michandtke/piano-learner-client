import React, {useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    note: {
        display: "flex"
    }
}))

export default function Notes() {
    const [notes, setNotes] = useState([])
    const styles = useStyles()
    return (
        <div>
            <Button variant="contained" onClick={() => loadNotes(setNotes)}>LOAD</Button>
            Hello my nodes:
            {
                notes.map(note => singleNote(note, styles))
            }
        </div>
    );
}

function singleNote(note, styles) {

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
        </div>
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