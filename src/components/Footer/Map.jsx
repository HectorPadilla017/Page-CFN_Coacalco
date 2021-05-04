import React from 'react'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(8, 2, 2, 2),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(8, 0, 0, 0),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
    },
    title: {
        paddingBottom: theme.spacing(4),
        textAlign: 'center',
    },
    list: {
        width: '200px',
        margin: 'auto',
        padding: theme.spacing(2),
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
}))

const Map = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant='h4'>
                Mapa del Sitio
            </Typography>
            <List className={classes.list}>
                <Typography variant='h6'>
                    <Link to='/' className={classes.link}>
                        Inicio
                    </Link>
                </Typography>
                <Typography variant='h6'>
                    <Link to='/Actividades' className={classes.link}>
                        Actividades
                    </Link>
                </Typography>
                <Typography variant='h6'>
                    <Link to='/Videos' className={classes.link}>
                        Videos
                    </Link>
                </Typography>
                <Typography variant='h6'>
                    <Link to='/Contacto' className={classes.link}>
                        Contacto
                    </Link>
                </Typography>
                
            </List>
        </div>
    )
}

export default Map
