import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '332px',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '310px',
        },
    },
    img: {
        height: '300px',
        width: '300px',
        margin: 'auto',
        objectFit: 'contain',
        marginTop: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            height: '280px',
            width: '280px',
        },
    },
    content: {
        height: '150px',
        width: '300px',
        margin: 'auto',

        [theme.breakpoints.down('xs')]: {
            width: '280px',
        },
    },
    title: {
        fontSize: '25px',
    },
    body: {
        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(2),
        },
    },
}));

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            className={classes.img}
            component="img"
            alt="Altar"
            image={props.Img}
            title="Altar"
            />
        <CardContent className={classes.content}>
            <Typography className={`${classes.body} ${classes.title}`} gutterBottom variant="h6" component="h6">
                {props.Titulo}
            </Typography>
            <Typography className={classes.body} variant="body2" align='justify' color="textSecondary" component="p">
            {props.Descripción}
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
    );
}