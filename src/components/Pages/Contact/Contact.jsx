import React from 'react'
import SocialContact from './SocialContact'
import CardMap from '../../Content/Cards/CardMap'
import CoverPages from '../../Content/CoverPages/CoverPages'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import foto from '../../../img/Cover3.png'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        background: theme.palette.background.default,
    },
    content: {
        padding: theme.spacing(10, 16, 20),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(10, 3, 10),
        },
    },
    grid1: {
        padding: theme.spacing(5, 5, 5, 0),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
        },
    },
    grid2: {
        padding: theme.spacing(5, 0, 5, 5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
        },
    },
    cardMap: {
        opacity: '1 !important',
    },
}))
const Contact = () => {
    const classes = useStyles()
    return (
        <Container className={classes.root} disableGutters maxWidth='xl'>
            <CoverPages 
                img={foto}
                title={'Contacto'}
            />
            <div className={classes.content}>
                    <Grid container>
                        <Grid className={classes.grid1} item xs={12} md={4}>
                            <SocialContact/>
                        </Grid>
                        <Grid className={classes.grid2} item xs={12} md={8}>
                            <CardMap className={classes.cardMap}/>
                        </Grid>
                    </Grid>
            </div>
        </Container>        
    )
}
export default Contact