import React from 'react';
import Container from '@material-ui/core/Container';
import NoteCard from './NoteCard';

export default function Notes(props) {
    // const {notes} = props;
    const notes = JSON.parse(window.localStorage.getItem('notes'));
    return (
        <Container style={{ padding: '1rem 0 0 2rem' }}>
            <h1 style={{ marginLeft: 20 }}>Notes</h1>
            <div style={{ width: '100%' }}>
                {props.notes.map((note, index) => (
                    <>
                        <NoteCard
                            id={note.id}
                            index={index}
                            key={note.id}
                            title={note.title}
                            note={note.note}
                            deleteNote={props.deleteNote}
                        />
                    </>
                ))}
            </div>
        </Container>
    );
}
