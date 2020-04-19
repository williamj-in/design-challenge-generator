import React from 'react';
import Container from '@material-ui/core/Container';
import NoteCard from './NoteCard';


export default function Notes(props) {
    // const {notes} = props;
    const notes = JSON.parse(window.localStorage.getItem('notes'));
    return (
        <Container style={{padding: '2rem',}}>
            <h1 style={{marginLeft: 20}}>Notes</h1>
            {notes.map((note, index) => (
                <>
                    <NoteCard index={index} key={note.id} title={note.title} note={note.note} />
                </>
            ))}
        </Container>
    )
}
