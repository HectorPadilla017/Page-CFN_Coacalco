import React from "react";
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'realtive',
        background: theme.palette.background.default,
        padding: theme.spacing(5, 0),
    },
    card: {
        display: 'flex',
    },
    girdItem: {
        margin: 'auto 0',
        width: "100%",
    },
    img: {
        padding: theme.spacing(3),
        width: "100%",
        height: "500px", 
        minHeight: "315px", 
        [theme.breakpoints.down('lg')]: {
            height: "430px", 
        },
        [theme.breakpoints.down('md')]: {
            height: "370px", 
        },
        [theme.breakpoints.down('sm')]: {
            height: "480px", 
        },
        [theme.breakpoints.down('xs')]: {
            height: "360px", 
        },
        [theme.breakpoints.down(440)]: {
            height: "300px", 
        },
        [theme.breakpoints.down(360)]: {
            height: "250px", 
        },
    },
    cardContent: {
        padding: theme.spacing(8, 4),
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(6, 4, 4, 2),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 3),
        },
    },
    cardActions: {
        padding: theme.spacing(3, 1, 1, 0),
    },
    des: {
        textAlign: 'justify',
    },
}));

export default function CardVideo(props) {
const classes = useStyles();
    return (
    <Box className={classes.root}>
        <Card className={classes.card}>
            <Grid container>
                <Grid className={classes.girdItem} item md={6}>
                    <CardMedia
                        className={classes.img}
                        allowfullscreen
                        frameborder="0" 
                        allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        component="iframe"
                        alt={props.Tema}
                        // image={foto}
                        src={`https://www.youtube.com/embed/${props.Video}`}
                        title={props.Tema}
                    />
                </Grid>
                <Grid item sm={12} md={6}>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h4" component="h4">
                        {props.Title}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="subtitle1">
                        {props.Tema}
                        </Typography>
                        <Typography className={classes.des} variant="body1" color="textSecondary" component="p">
                        {props.Descripcion}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    </Box>
    );
}