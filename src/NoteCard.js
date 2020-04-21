import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '26%',
        margin: 30,
        float: 'left',
        backgroundColor: '#fbfbf8',
        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
        breakInside: 'avoid',

        borderLeft: '5px solid #3f50b5',
        borderRadius: '5px',
        padding: '10px',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            transform: 'translateY(-10px)',
        },
    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    delete: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
});

export default function NoteCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const { id, title, index, deleteNote, note } = props;
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };

    return (
        <div className={classes.root} onMouseOver={toggleHover} onMouseOut={toggleHover}>
            <CardContent>
                {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography> */}
                <Typography variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography
                    className={classes.pos}
                    color="textSecondary"
                    style={{ marginTop: '1rem', wordBreak: ' break-all' }}
                >
                    {props.note}
                </Typography>
                {/* <Typography variant="body2" component="p">
          {note}
        </Typography> */}
            </CardContent>
            <CardActions>
                <IconButton
                    className={classes.delete}
                    aria-label="show more"
                    onClick={() => {
                        props.deleteNote(id);
                    }}
                >
                    <DeleteOutlineIcon />
                </IconButton>
            </CardActions>
        </div>
    );
}
