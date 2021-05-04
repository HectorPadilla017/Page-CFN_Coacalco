import React from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import Facebook from '../../Content/SocialMedia/Facebook'
import Twitter from '../../Content/SocialMedia/Twitter'
import Instagram from '../../Content/SocialMedia/Instagram'
import Youtube from '../../Content/SocialMedia/Youtube'

import HomeIcon from '@material-ui/icons/Home'
import DescriptionIcon from '@material-ui/icons/Description'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo'
import ContactMailIcon from '@material-ui/icons/ContactMail'

import logo from '../../../img/Logo.png'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '246px',
        color: '#fff',
    },
    drawerPaper: {
        width: '250px',
        // border: 'solid 2px rgba(255,255,255,0.5)',
        borderRadius: '15px 0 0 15px',
        background: 'rgba(0,0,0, 0.6)',
        backdropFilter: 'blur(20px)'
    },
    toolbar: theme.mixins.toolbar,
    img: {
        display: 'block',
        width: '100px',
        margin: 'auto',
        marginTop: '5px',
        marginBottom: '5px',
    },
    icon: {
        marginRight: '15px',
        marginLeft: '15px',
    },
    color: {
        color: '#fff'
    },
    divider: {
        background: 'rgba(255,255,255, 0.2)'
    },
    ico: {
        display: 'flex',
        justifyContent: 'center',
    },
}))

const Cajon = (props) => {
    const classes = useStyles()

    return (
            <div className={classes.drawer}>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant='temporary'
                    anchor='right'
                    open={props.open}
                    onClose={props.onClose ? props.onClose : null}
                >
                    <div className={classes.root}>
                        <div className={classes.toolbar}>
                            <img className={classes.img} src={logo}/>
                        </div>
                        <Divider className={classes.divider}/>
                        <List>
                            <ListItem button component={Link} to='/'>
                                <HomeIcon className={classes.icon}/>
                                <ListItemText>
                                    <Typography className={classes.color} variant="h6" >
                                        Inicio
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to='/Actividades'>
                                <DescriptionIcon className={classes.icon}/>
                                <ListItemText>
                                    <Typography className={classes.color} variant="h6" >
                                        Actividades
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to='/Videos'>
                                <OndemandVideoIcon className={classes.icon}/>
                                <ListItemText>
                                    <Typography className={classes.color} variant="h6" >
                                        Videos
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to='/Contacto'>
                                <ContactMailIcon className={classes.icon}/>
                                <ListItemText>
                                    <Typography className={classes.color} variant="h6" >
                                        Contacto
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <Divider className={classes.divider}/>
                            <ListItem className={classes.ico}>
                                <Facebook className={classes.color}/>
                                <Twitter className={classes.color}/>
                                <Instagram className={classes.color}/>
                                <Youtube className={classes.color}/>
                            </ListItem>
                            <Divider className={classes.divider}/>
                        </List>
                    </div>
                </Drawer>
            </div>
    )
}

export default Cajon
