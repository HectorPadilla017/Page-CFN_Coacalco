import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar'
// import IconButton from '@material-ui/core/IconButton'
// import MoreVertIcon from '@material-ui/icons/MoreVert'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import '../../Function/FadeScroll'
import '../../styles/fade.css'

const useStyles = makeStyles((theme) => ({
    avatar: {
        background: '#0d3269',
        background: '-webkit-linear-gradient(to left,  #1965d6, #0d3269)', 
        background: 'linear-gradient(to left,  #1965d6, #0d3269)',
    },
    map: {
        zIndex: 1,
        height: '500px',
        [theme.breakpoints.down('sm')]: {
            height: '400px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '280px',
        }
    }
}))

const CardDirection = () => {
    const classes = useStyles()
    return (
        <Card className={`${classes.root} ${'fade_down'}`}>
            <CardHeader
                avatar={
                <Avatar aria-label="" className={classes.avatar}>
                    CFN
                </Avatar>
                }
                // action={
                // <IconButton aria-label="">
                //     <MoreVertIcon />
                // </IconButton>
                // }
                title="Venustiano Carranza 27, Zacuautitla, 55700"
                subheader="San Francisco Coacalco, Méx"
            />
            <MapContainer className={classes.map} center={{lat: '19.6304787', lng: '-99.0953603'}} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={{lat: '19.6304787', lng: '-99.0953603'}}>
                    <Popup>
                        Centro Familiar para las Naciones <br /> Coacalco
                    </Popup>
                </Marker>
            </MapContainer>
        </Card>
    )
}
export default CardDirection
