import React from 'react'
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography'
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        padding: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(0),
        },
    },
    list: {
        width: '350px',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '320px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '270px',
        },
    },
    contact: {
        paddingBottom: theme.spacing(2),
    },
    sub: {
        fontWeight: '500',
    },
    img: {
        width: '400px',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '300px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '260px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '200px',
        },
    },
    icon: {
        fontSize: '45px',
        [theme.breakpoints.down('md')]: {
            fontSize: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px',
        },
    },
    iconSocial: {
        marginRight: theme.spacing(2),
    },
    social: {
        paddingTop: theme.spacing(1),
    },
}))

const SocialContact = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <List className={classes.list}>
                <div className={classes.contact}>
                    <CallIcon className={classes.icon}/>
                    <Typography variant="h5">
                        (55)4948-9384
                    </Typography>
                </div>
                <div className={classes.contact}>
                    <MailOutlineIcon className={classes.icon}/>
                    <Typography variant="h5">
                        cfn@gmail.com
                    </Typography>
                </div>
                <hr/>
                <div>
                    <Typography className={classes.sub} variant='h5'>
                        Horario de Atención 
                    </Typography>
                    <Typography variant='h6'>
                        Martes - Domingo
                        <br/>
                        10:00 - 14:00 / 17:00 - 19:00 
                    </Typography>
                </div>
                <hr/>
                <div className={classes.social}>
                    <Link href='http://www.facebook.com/cfnac' color='inherit' target='_blank' rel="noopener">
                        <FacebookIcon className={`${classes.icon} ${classes.iconSocial}`}/>
                    </Link>
                    <Link href='http://www.twitter.com/cfnac' color='inherit' target='_blank' rel="noopener">
                        <TwitterIcon className={`${classes.icon} ${classes.iconSocial}`}/>
                    </Link>
                    <Link href='http://www.instagram.com/cfn_coacalco' color='inherit' target='_blank' rel="noopener">
                        <InstagramIcon className={`${classes.icon} ${classes.iconSocial}`}/>
                    </Link>
                    <Link href='http://www.youtube.com/user/gkmbio' color='inherit' target='_blank' rel="noopener">
                        <YouTubeIcon className={`${classes.icon} ${classes.iconSocial}`}/>
                    </Link>
                    <Link href='mailto:cfn@cfn.org.mx' color='inherit' target='_blank' rel="noopener">
                        <EmailIcon className={`${classes.icon} ${classes.iconSocial}`}/>
                    </Link>
                </div>
            </List>
        </div>
    )
}

export default SocialContact
