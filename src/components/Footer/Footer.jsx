import React from 'react'
import Contact from './Contact'
import Map from './Map'
import SocialMedia from './SocialMedia'
import Copyright from './Copyright'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        background: '#0d3269',
        background: '-webkit-linear-gradient(to top, #1965d6, #0d3269)', 
        background: 'linear-gradient(to top, #1965d6, #0d3269)',
        color: '#fff',
        padding: theme.spacing(0, 12, 4),
        zIndex: 2,
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0, 2, 6),
            
        },
    },
}))
const Footer = () => {
    const classes = useStyles()
    return (
        <Box>
            <Box className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Contact/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Map/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <SocialMedia/>
                    </Grid>
                </Grid>
            </Box>
            <Grid item xs={12}>
                <Copyright/>
            </Grid>
        </Box>
    )
}
export default Footer
