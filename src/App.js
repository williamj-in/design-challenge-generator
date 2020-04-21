import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { nouns, users } from './Data';
import styled from 'styled-components';
import Footer from './Footer';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import uuid from 'uuid/v4';
import Notes from './Notes';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
        height: '100%',
        backgroundColor: '#fafafa',
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));
const highlightStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    textTransform: 'capitalize',
};
const containerStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    backgroundColor: '#fbfbf8',
    padding: '2rem 2rem',
    borderLeft: '5px solid #3f50b5',
    borderRadius: '5px',
};
const outlinedContainerStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '3rem',
    // backgroundColor: '#efeeee',
    padding: '0 20px',
    // borderLeft: '5px solid #3f50b5',
    borderRadius: '5px',
};

function App() {
    const inputEl = useRef(null);
    const initialNotes = [];
    const [notes, setNotes] = useState(JSON.parse(window.localStorage.getItem('notes')) || initialNotes);
    const classes = useStyles();
    const refresh = () => {
        setNoun(nouns[Math.floor(Math.random() * nouns.length)]);
        setUser(users[Math.floor(Math.random() * users.length)]);
        setValue('');
    };
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };
    const save = (e) => {
        if (value == null || value.trim() === '') {
            setValue('');
            return;
        }
        e.preventDefault();
        const newNote = { id: uuid(), title: `Design a ${noun} for ${user}`, note: value };
        setNotes([...notes, newNote]);
        setValue('');
        refresh();

    };

    useEffect(() => {
        window.localStorage.setItem('notes', JSON.stringify(notes));
        inputEl.current.focus();

    });

    const [noun, setNoun] = useState(nouns[Math.floor(Math.random() * nouns.length)]);
    const [user, setUser] = useState(users[Math.floor(Math.random() * users.length)]);
    const [autoFocus, setAutoFocus] = useState(true);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/notes" render={() => <Notes notes={notes} deleteNote={deleteNote} />} />
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Container style={{ padding: '1rem 2rem' }}>
                                <h1 style={{ marginLeft: 20 }}>Challenge</h1>

                                <div style={outlinedContainerStyle}>
                                    <p style={{ color: '#666', fontSize: '2rem', lineHeight: '3rem' }}>
                                        Design a <span style={{ ...highlightStyle, color: '#ab003c' }}> {noun} </span>
                                        for
                                        <span style={{ ...highlightStyle, color: '#2c387e' }}> {user} </span>
                                    </p>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={refresh}
                                            style={{
                                                top: 'auto',
                                                marginBottom: 0,
                                            }}
                                        >
                                            Get another one
                                        </Button>
                                    </div>
                                </div>
                                <div style={containerStyle}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Notes here..."
                                        multiline
                                        rows={15}
                                        // variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        value={value}
                                        autoFocus
                                        inputRef={inputEl}
                                    />
                                    <div
                                        style={{
                                            marginTop: 20,
                                            textAlign: 'left',
                                        }}
                                    >
                                        <Button variant="contained" color="primary" onClick={save}>
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </Container>
                        )}
                    />
                </Switch>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
