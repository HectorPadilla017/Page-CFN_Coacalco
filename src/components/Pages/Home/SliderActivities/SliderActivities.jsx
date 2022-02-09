import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import {useDispatch, useSelector} from 'react-redux'
// import { getActivitiesAction } from '../../../../redux/Activities'
// import Api from '../../../Function/ActivitiesApi.js'
// import SwiperSlide from './Swiper.jsx';
import CardSlider from './CardSlider.jsx';
// import CardSlider2 from './CardSlider2.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import '../../../styles/SwiperEdit.css'
import 'swiper/swiper-bundle.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        background: theme.palette.background.default,
        padding: theme.spacing(6, 0),
    },
    typo: {
        padding: theme.spacing(0, 0, 2, 6),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(6),
        },
    },
    swiper: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1, 0),
        },
    },
    swiperCard: {
        margin: theme.spacing(1, 0, 5, 0),
    },
}));

SwiperCore.use([Navigation, Pagination]);

const SliderActivities = () => {
    const [act, setAct] = useState([])
    
    useEffect(() => {
        ActivitiesApi()
    }, [])

    async function ActivitiesApi (){
        const res = await axios.get('/Info.json', {withCredentials:true})
        .then((res) => {
            setAct(res.data.Actividades1)
        });
    }

    // console.log([res].data)

    // const res = getActivitiesAction()
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     const act = () => {
    //         dispatch(getActivitiesAction());
    //         console.log(activities)
    //     }
    //     act()
    // }, [dispatch]);
    
    // const activities = useSelector(store => store.Activities.object)
    // console.log(activities)

    const classes = useStyles()
    
        return (
            <Box className={classes.root}>
                <Typography className={classes.typo} variant='h3' color='inherit'>
                    Actividades
                </Typography>
                {act.length ? (
                    <Swiper
                        id='swiper-replace2'
                        className={classes.swiper}
                        freeMode={true}
                        breakpoints={{
                            1500: {
                                slidesPerView: 4,
                            },
                            1072: {
                                slidesPerView: 3,
                            },
                            720: {
                                slidesPerView: 2,
                            },
                            0: {
                                slidesPerView: 1,
                            },
                        }}
                        navigation 
                        loop={true}
                        pagination={{ clickable: true }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            act.map(item => (
                                <SwiperSlide key={item.id} className={classes.swiperCard}>
                                    <CardSlider 
                                        key={item.id}
                                        Img={item.Img}
                                        Titulo={item.Titulo}
                                        Descripción={item.Descripción}
                                        Href={item.Href}
                                        Link={item.Link}
                                        Des={item.Des}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                ) : null
                }
            </Box>
        )
}
    export default SliderActivities