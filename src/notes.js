import React, {useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import Composed from "./components/composed/Composed";

const useStyles = makeStyles(() => ({
    note: {
        display: "flex",
        alignContent: "space-between",
        width: "100%"
    },
    level: {
        height: "5px",
        lineHeight: "5px",
        backgroundColor: "white",
        textDecoration: "line-through"
    }
}))

export default function Notes() {
    const [notes, setNotes] = useState([])
    const [current, setCurrent] = useState([])
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
            {
                <Composed fnCurrentNote={(note) => setCurrent(note)} notes={current}/>
            }
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
                {<Composed fnCurrentNote={(note) => setCurrent(note)}/>}
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