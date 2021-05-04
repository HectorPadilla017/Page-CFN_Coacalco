import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import '../../Function/FadeScroll'
import '../../styles/fade.css'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relativa',
        background: '#0d3269',
        background: '-webkit-linear-gradient(to left,  #1965d6, #0d3269)', 
        background: 'linear-gradient(to left,  #1965d6, #0d3269)',
    },
    gridImg: {
        height: '500px',
        [theme.breakpoints.down(1700)]: {
            height: '450px',
        },
        [theme.breakpoints.down('md')]: {
            height: '400px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '450px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '350px',
        },
        [theme.breakpoints.down(450)]: {
            height: '250px',
        },
    },
    imgCont: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 3, 0),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 2),
        },
    },
    img: {
        width: '100%',
        height: '500px',
        objectFit: 'contain',
        [theme.breakpoints.down(1700)]: {
            height: '450px',
        },
        [theme.breakpoints.down('md')]: {
            height: '400px',
        },
        [theme.breakpoints.down('sm')]: {
            height: '420px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '350px',
        },
        [theme.breakpoints.down(450)]: {
            height: '250px',
        },
    },
    gridMsg: {
        height: '500px',
        padding: theme.spacing(6, 5, 4),
        [theme.breakpoints.down(1700)]: {
            height: '450px',
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(4, 5, 4),
            height: '400px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(3, 2, 3),
        },
    },
    text: {
        color: '#fff',
        // textAlign: 'justify',
    },
    des: {
        textAlign: 'justify',
    },
}))

const TextLeft = (props) => {
    const classes = useStyles()
    return (
        <div className='fade_left'>
            <Box className={classes.root}>
                <Grid container>
                    <Hidden mdUp>
                        <Grid className={classes.gridImg} item sm={12} md={6}>
                            <Box className={classes.imgCont}>
                                <CardMedia
                                className={classes.img}
                                component='img'
                                image={props.Img}
                                alt={props.Nombre}
                                title={props.Nombre}
                                />
                            </Box>
                        </Grid>
                    </Hidden>
                    <Grid className={classes.gridMsg} item sm={12} md={6}>
                        <Box className={classes.text}>
                            <Typography gutterBottom variant='h3'>{props.Titulo}</Typography>
                            <Typography gutterBottom variant='h6'>{props.Subtitulo}</Typography>
                            <Typography className={classes.des} variant='body1'>
                                {props.Descripción}
                            </Typography>
                        </Box>
                    </Grid>
                    <Hidden smDown>
                        <Grid className={classes.gridImg} item sm={12} md={6}>
                            <Box className={classes.imgCont}>
                                <CardMedia
                                className={classes.img}
                                component='img'
                                image={props.Img}
                                alt={props.Nombre}
                                title={props.Nombre}
                                />
                            </Box>
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </div>
    )
}
export default TextLeft