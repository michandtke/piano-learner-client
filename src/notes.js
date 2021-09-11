import React, {useState} from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {IconButton, makeStyles} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(() => ({
    note: {
        display: "flex",
        alignContent: "space-between",
        width: "100%"
    },
    drawn: {
        display: "flex",
        flexFlow: "column"
    },
    level: {
        height: "5px",
        lineHeight: "5px",
        backgroundColor: "white",
        textDecoration: "line-through"
    },
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
            <Button className={styles.level} color="white" onClick={() => setCurrent("A")}/>
            <Button variant="contained" color="black"  onClick={() => setCurrent("H")}/>
            <Button variant="contained" onClick={() => setCurrent("C")}/>
            <Button variant="contained" onClick={() => setCurrent("D")}/>
            <Button variant="contained" onClick={() => setCurrent("E")}/>
            <Button variant="contained" onClick={() => setCurrent("F")}/>
            <Button variant="contained" onClick={() => setCurrent("G")}/>
            {emptyButton(() => setCurrent("Z"))}
        </div>
    )
}

function emptyButton(res) {
    return (
        <IconButton onClick={res} color="white"><RemoveIcon /></IconButton>
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