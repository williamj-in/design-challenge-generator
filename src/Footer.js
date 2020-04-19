import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        boxShadow: '0 -10px 40px rgba(0,0,0,0.05)',
    },
});

const Footer = styled.div`
    height: 6vh;
    background-color: #fffefb;
    display: flex;
    justify-content: flex-end;
    color: #202020;
    align-items: center;
    padding: 5px 3rem 0 3rem;
    font-weight: 700;
    z-index: 10;
    text-decoration: none;
    top: auto;
    bottom: 0;
`;

export default function TinyFooter() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <AppBar position="fixed" className={classes.appBar} >
            <Footer>


                        <Container>
                            <NavLink exact to='/' style={{padding: '10px 0', borderRadius: '5px'}} activeStyle={{backgroundColor: '#2f3f9f', color: 'white'}}><Tab label="Creativ 👩‍🎨" /></NavLink>
                            <NavLink exact to='/notes' style={{padding: '10px 0', borderRadius: '5px'}} activeStyle={{backgroundColor: '#2f3f9f', color: 'white'}}><Tab label="Notes 📝" /></NavLink>
                        </Container>

            </Footer>
        </AppBar>
    );
}
