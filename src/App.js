import React, { useState, useEffect } from 'react';
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
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        height: '100%',
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function App() {
    const initialNotes = [];
    const [notes, setNotes] = useState(JSON.parse(window.localStorage.getItem('notes')) || initialNotes);
    const classes = useStyles();
    const refresh = () => {
        setNoun(nouns[Math.floor(Math.random() * nouns.length)].toUpperCase());
        setUser(users[Math.floor(Math.random() * users.length)]);
    };
    const save = (e) => {
        e.preventDefault();
        const newNote = { id: uuid(), title: `Design a ${noun} for ${user}`, note: value };
        // const oldNotes = JSON.parse(window.localStorage.getItem('notes'));
        setNotes([...notes, newNote]);
        // window.localStorage.setItem('notes', JSON.stringify(notes));
        console.log(notes);
        setValue('');
        refresh();
    };

    useEffect(() => {
        window.localStorage.setItem('notes', JSON.stringify(notes));
    });

    const [noun, setNoun] = useState(nouns[Math.floor(Math.random() * nouns.length)].toUpperCase());
    const [user, setUser] = useState(users[Math.floor(Math.random() * users.length)]);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route
                        exact
                        path="/notes"
                        render={() => (
                            <>
                                <Notes notes={notes} />
                            </>
                        )}
                    />
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Container style={{ padding: '2rem' }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        <Paper className={classes.paper}>
                                            <div
                                                style={{
                                                    padding: '2rem',
                                                }}
                                            >
                                                <h1>Design a</h1>
                                                <h1>{noun}</h1>
                                                <h1>for</h1>
                                                <h1>{user}</h1>
                                            </div>
                                            <Button variant="contained" color="primary" onClick={refresh}>
                                                Get another one
                                            </Button>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Paper className={classes.paper}>
                                            <TextField
                                                id="filled-multiline-static"
                                                label="Notes here..."
                                                multiline
                                                rows={30}
                                                variant="filled"
                                                fullWidth
                                                onChange={handleChange}
                                                value={value}
                                                autoFocus
                                            />
                                            <div
                                                style={{
                                                    marginTop: 20,
                                                    textAlign: 'right',
                                                }}
                                            >
                                                <Button variant="contained" color="primary" onClick={save}>
                                                    Save
                                                </Button>
                                            </div>
                                        </Paper>
                                    </Grid>
                                </Grid>
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
