import React from 'react';
import Carousel from './Carousel.jsx';
import CardSocialLeft from './CardSocialLeft/CardSocialLeft.jsx';
import CardInfo from './CardInfo/CardInfo.jsx'
import SliderActivities from './SliderActivities/SliderActivities.jsx'
import MessagePas from './MessagePas'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
}))

const Inicio = () => {
    const classes = useStyles()
    return (
            <Container className={classes.root} disableGutters maxWidth="xl">
                <Carousel/>
                <CardSocialLeft/>
                <CardInfo/>
                <SliderActivities/>
                <MessagePas/>
            </Container>
    )
}

export default Inicio
