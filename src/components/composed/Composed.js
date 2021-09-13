import React from "react";
import Button from "@material-ui/core/Button";
import {Icon} from "../../Icon";
import one_blank from "./one_blank.png";
import try_middle from "./try_middle.png";
import filled_middle from "./filled_middle.png";
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


export default function Composed({fnCurrentNote, notes}) {
    const styles = useStyles()

    return (
        <div className={styles.drawn}>
            { button("f", notes, fnCurrentNote, styles) }
            { button("d", notes, fnCurrentNote, styles) }
            { button("h", notes, fnCurrentNote, styles) }
            { button("g", notes, fnCurrentNote, styles) }
            { button("e", notes, fnCurrentNote, styles) }
        </div>
    );
}

function button(tone, notes, fnCurrentNote, styles) {
    return (notes.includes(tone))
        ? filledButton(() => fnCurrentNote(notes.filter(x => x !== tone)), styles)
        : emptyButton(() => fnCurrentNote([tone, ...notes]), styles)
}

function emptyButton(doin, styles) {
    return (
        <Button onClick={doin} className={styles.btn}>
            <Icon src={one_blank} srcOnHover={try_middle} alt="what"/>
        </Button>
    )
}

function filledButton(doin, styles) {
    return (
        <Button onClick={doin} className={styles.btn}>
            <Icon src={filled_middle} srcOnHover={try_middle} alt="what"/>
        </Button>
    )
}