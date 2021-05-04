import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography';

import '../../styles/SwiperEdit.css'
// import 'swiper/swiper-bundle.css'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        // width: '100%',
        // height: '720px',
        // backgroundColor: '#464646',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        // backgroundSize: 'cover',
        },
        swiper: {
            height: '100%',
        },
        imgCont: {
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
            zIndex: '2',
            background: 'rgba(13, 50, 105, 0)',
            background: 'linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 12%)',
            background: '-webkit-linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 12%)', 
            [theme.breakpoints.down('md')]: {
                background: 'linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 15%)',
                background: '-webkit-linear-gradient(rgba(13, 50, 105, 0.8), rgba(255, 255, 255, 0) 15%)', 
            }
        },
        title: {
            whiteSpace: 'pre-wrap',
            whiteSpace: '-moz-pre-wrap',
            whiteSpace: '-o-pre-wrap',
            color: '#fff',
            textAlign: 'center',
            marginTop: '300px',
            marginRight: '15%',
            marginLeft: '15%',
            [theme.breakpoints.down('md')]: {
                marginTop: '200px',
                marginRight: '10%',
                marginLeft: '10%',
            },
            [theme.breakpoints.down('sm')]: {
                marginTop: '120px',
                marginRight: '8%',
                marginLeft: '8%',
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: '60px',
                marginRight: '6%',
                marginLeft: '6%',
            },
        },
        des: {
            color: '#fff',
            textAlign: 'center',
            marginRight: '15%',
            marginLeft: '15%',
        },
        img: {
            width: '100%',
            objectFit: 'cover',
            height: '1080px',
            [theme.breakpoints.down('xl')]: {
                height: '1080px',
            },
            [theme.breakpoints.down('lg')]: {
                height: '800px',
            },
            [theme.breakpoints.down(1024)]: {
                height: '768px',
            },
            [theme.breakpoints.down('md')]: {
                height: '600px',
            },
            [theme.breakpoints.down('sm')]: {
                height: '450px',
            },
            [theme.breakpoints.down('xs')]: {
                height: '250px',
            },
        },
}));

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Carousel() {
    const [ban, setBan] = useState([])
    
    useEffect(() => {
        Banner()
    }, [])
    
    function Banner (){
        const res = axios.get('/Info.json', {withCredentials:true})
        .then((res) => {
            setBan(res.data.Banner)
        });
    }
    const classes = useStyles()
    return (
    <Box className={classes.root}>
        {ban.length ? (
        <>
        
        <Swiper
            id='swiper-replace'
            className={classes.swiper}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{
                delay: 8000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet' }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {
                            ban.map(item => (
                                <SwiperSlide>
                                    <div className={classes.imgCont}>
                                        <Typography className={classes.title} variant='h2' color='inherit'>{item.Titulo}</Typography>
                                        <Hidden xsDown>
                                            <Typography className={classes.des} variant='body1' color='inherit'>{item.Descripción}</Typography>
                                        </Hidden>
                                    </div>
                                    <img 
                                        className={classes.img}
                                        key={item.id}
                                        src={item.Img}
                                    />
                                </SwiperSlide>
                            ))
                        }
        </Swiper>
        </>
        ) : null }
    </Box>
    );
};
            // <SwiperSlide>
            //     <div className={classes.imgCont}></div>
            //     <img src={foto1} className={classes.img}/>
            // </SwiperSlide>
            // <SwiperSlide>
            //     <div className={classes.imgCont}></div>
            //     <img src={foto2} className={classes.img}/>
            // </SwiperSlide>
            // <SwiperSlide>
            //     <div className={classes.imgCont}></div>
            //     <img src={foto3} className={classes.img}/>
            // </SwiperSlide>
            // <SwiperSlide>
            //     <div className={classes.imgCont}></div>
            //     <img src={foto4} className={classes.img}/>
            // </SwiperSlide>
            // <SwiperSlide>
            //     <div className={classes.imgCont}></div>
            //     <img src={foto5} className={classes.img}/>
            // </SwiperSlide>