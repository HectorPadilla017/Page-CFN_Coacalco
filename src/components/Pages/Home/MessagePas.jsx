import React from 'react'
// import ParallaxScrollY from '../../Function/ParallaxScrollY'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import foto from '../../../img/Jonas.png'
import foto1 from '../../../img/Firma.png'
import foto2 from '../../../img/FondoPas.png'

import '../../Function/FadeScroll'
import '../../styles/fade.css'

const useStyles = makeStyles((theme) => ({
    
    root: {
        position: 'relative',
        backgroundColor: '#484848',
    },
    gridImg: {
        backgroundColor: '#E9E9E9',
        height: '500px',
        [theme.breakpoints.down('xs')]: {
        height: '400px',
        },
        [theme.breakpoints.down(480)]: {
        height: '340px',
        },
        [theme.breakpoints.down(375)]: {
        height: '310px',
        },
    },
    imgFon: {
        // position: 'relative',
        height: '500px',
        width: '100%',
        objectFit: 'cover',
        [theme.breakpoints.down('xs')]: {
            height: '400px',
        },
        [theme.breakpoints.down(480)]: {
        height: '340px',
        },
        [theme.breakpoints.down(375)]: {
        height: '310px',
        },
    },
    imgCont: {
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    imgJonas: {
        position: 'absolute',
        width: '600px',
        marginTop: '36px',
        marginLeft: '200px',
        objectFit: 'contain',
        zIndex: 1,
        [theme.breakpoints.down(1580)]: {
            width: '560px',
            marginTop: '36px',
            marginLeft: '80px',
        },
        [theme.breakpoints.down('md')]: {
            width: '500px',
            marginTop: '112px',
            marginLeft: '40px',
        },
        [theme.breakpoints.down(1080)]: {
            width: '440px',
            marginTop: '112px',
            marginLeft: '38px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '540px',
            marginTop: '18px',
            marginLeft: '220px',
        },
        [theme.breakpoints.down(800)]: {
            width: '540px',
            marginTop: '18px',
            marginLeft: '120px',
        },
        [theme.breakpoints.down(690)]: {
            width: '540px',
            marginTop: '18px',
            marginLeft: '70px',
        },
        [theme.breakpoints.down(630)]: {
            width: '540px',
            marginTop: '18px',
            marginLeft: '40px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '428px',
            marginTop: '18px',
            marginLeft: '100px',
        },
        [theme.breakpoints.down(530)]: {
            width: '428px',
            marginTop: '18px',
            marginLeft: '50px',
        },
        [theme.breakpoints.down(480)]: {
            width: '350px',
            marginTop: '28px',
            marginLeft: '60px',
        },
        [theme.breakpoints.down(415)]: {
            width: '350px',
            marginTop: '28px',
            marginLeft: '25px',
        },
        [theme.breakpoints.down(375)]: {
            width: '320px',
            marginTop: '25px',
            marginLeft: '30px',
        },
    },
    imgFirma: {
        position: 'absolute',
        width: '240px',
        marginTop: '200px',
        marginLeft: '90px',
        objectFit: 'contain',
        zIndex: 2,
        [theme.breakpoints.down(1580)]: {
            width: '200px',
            marginTop: '200px',
            marginLeft: '30px',
        },
        [theme.breakpoints.down('md')]: {
            width: '140px',
            marginTop: '250px',
            marginLeft: '15px',
        },
        [theme.breakpoints.down(1030)]: {
            width: '140px',
            marginTop: '250px',
            marginLeft: '15px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '200px',
            marginTop: '200px',
            marginLeft: '40px',
        },
        [theme.breakpoints.down(690)]: {
            width: '180px',
            marginTop: '200px',
            marginLeft: '20px',
        },
        [theme.breakpoints.down(630)]: {
            width: '140px',
            marginTop: '200px',
            marginLeft: '20px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '140px',
            marginTop: '160px',
            marginLeft: '40px',
        },
        [theme.breakpoints.down(530)]: {
            width: '140px',
            marginTop: '160px',
            marginLeft: '20px',
        },
        [theme.breakpoints.down(480)]: {
            width: '110px',
            marginTop: '130px',
            marginLeft: '20px',
        },
        [theme.breakpoints.down(415)]: {
            width: '110px',
            marginTop: '130px',
            marginLeft: '10px',
        },
        [theme.breakpoints.down(375)]: {
            width: '110px',
            marginTop: '100px',
            marginLeft: '5px',
        },
    },
    // contJon: {
    //     display: 'flex',
    //     justifyContent: 'center',
    // },
    // imgJonas: {
    //     position: 'absolute',
    //     width: '600px',
    //     marginTop: '36px',
    //     marginLeft: '110px',
    //     objectFit: 'contain',
    //     zIndex: 1,
    //     [theme.breakpoints.down('md')]: {
    //         width: '500px',
    //         marginTop: '112px',
    //         marginLeft: '40px',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         width: '580px',
    //         marginTop: '56px',
    //         marginLeft: '20px',
    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         width: '428px',
    //         marginTop: '72px',
    //         marginLeft: '25px',
    //     },
    //     [theme.breakpoints.down(450)]: {
    //         width: '350px',
    //         marginTop: '32px',
    //         marginLeft: '10px',
    //     },
    // },
    // imgFirma: {
    //     position: 'absolute',
    //     width: '200px',
    //     marginTop: '200px',
    //     marginRight: '360px',
    //     objectFit: 'contain',
    //     zIndex: 2,
    //     [theme.breakpoints.down('md')]: {
    //         width: '140px',
    //         marginTop: '200px',
    //         marginRight: '320px',
    //     },
    //     [theme.breakpoints.down('sm')]: {
    //         width: '200px',
    //         marginTop: '200px',
    //         marginRight: '395px',
    //     },
    //     [theme.breakpoints.down('xs')]: {
    //         width: '140px',
    //         marginTop: '160px',
    //         marginRight: '300px',
    //     },
    //     [theme.breakpoints.down(450)]: {
    //         width: '110px',
    //         marginTop: '110px',
    //         marginRight: '250px',
    //     },
    // },
    gridText: {
        height: '500px',
        zIndex: 10,
        padding: theme.spacing(4, 6, 4, 6),
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(4, 4, 2, 4),
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3, 4, 2, 4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(6, 6, 4, 6),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(4, 3, 2, 3),
            height: '600px',
        },
    },
    text: {
        color: '#fff',
        zIndex: 10,
    },
    // animation: {
    //     opacity: 0,
    //     transform: 'translateX(100px)',
    //     transitionProperty: 'transform, opacity',
    //     '&.aos-animate': {
    //         opacity: 1,
    //         transform: 'translateX(0)',
    //     }
    // },
}))

const MessagePas = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid className={classes.gridImg} item xs={12} sm={12} md={6}>

                    <Box className={classes.imgCont}>
                    <img className={classes.imgFon} src={foto2}/>
                    <img className={`${classes.imgFirma} ${'fade_up'}`} src={foto1}/>
                        <CardMedia
                        className={`${classes.imgJonas} ${'fade_up'}`}
                        component='img'
                        image={foto}
                        alt='Jonas Fernandez'
                        title='Jonas Fernandez'
                        />
                    </Box>
                        
                </Grid>
                <Grid className={classes.gridText} item xs={12} sm={12} md={6}>
                    <Box className={classes.text}>
                        <Typography gutterBottom variant='h3' className='fade_left'>CFN Coacalco </Typography>
                        
                        <Typography variant='body1' component="p" className='fade_left'>
                            Es una gran familia, donde cada inviduo tiene un lugar, desde los ancianos hasta los niños de brazos, aquí todos tenemos la misma dignidad delante de Dios, pero respetamos y honramos las Autoridades establecidas por Él en la Iglesia. <br/><br/>

                            CFN Coacalco es una gran casa donde el amor y respeto se impregnan en cada espacio. Es un lugar de adoración, buscamos honrar en todo momento al Padre, Hijo y Espíritu Santo, entendiendo que los dones del Espíritu están disponibles para todo el que cree. <br/><br/>

                            Estamos comprometidos a enseñar la sana doctrina y capacitar a todo el que quiera servir a Dios. Es una casa de Bendición para el que viene en busca de la "Perla de Gran Precio". <br/><br/>

                            CFN Coacalco es nuestra casa.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default MessagePas
