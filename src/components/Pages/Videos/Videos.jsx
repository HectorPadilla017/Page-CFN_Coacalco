import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelAction } from '../../../redux/YoutubeApi'
import { getTeachingAction } from '../../../redux/YouTeachingApi'
import { getSermonsAction } from '../../../redux/YouSermonsApi'
import CardVideo from '../../Content/Cards/CardVideo'
import CoverPages from '../../Content/CoverPages/CoverPages'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import foto from '../../../img/Cover2.png'

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
}))

const Videos = () => {
    const dispatch = useDispatch()
    const youtube = useSelector(store => store)
    // const youtube1 = useSelector(store => store.YoutubeApi)
    // const youtube2 = useSelector(store => store.YoutubeApi)
    // const youtube3 = useSelector(store => store.YoutubeApi)

    useEffect(() => {
        FetchData()
    },[])
    const FetchData = () => {
        dispatch(getChannelAction())
        dispatch(getTeachingAction())
        dispatch(getSermonsAction())
    }
    console.log(youtube)
    // console.log(youtube1)
    // console.log(youtube2)
    // console.log(youtube3)
    const tema1 = youtube.YoutubeApi.channel.snippet.title
    const video1 = youtube.YoutubeApi.channel.id.videoId

    const tema2 = youtube.TeachingApi.teaching.title
    const video2 = youtube.TeachingApi.teaching.resourceId.videoId

    const tema3 = youtube.SermonsApi.sermons.title
    const video3 = youtube.SermonsApi.sermons.resourceId.videoId

    const classes = useStyles()
    return (
        <Container className={classes.root} disableGutters maxWidth='xl'>
            <CoverPages 
                img={foto}
                title={'Videos'}
            />
            <div className={classes.content}>
                {tema1.length && tema2.length && tema3.length ? (
                    <>
                    <CardVideo 
                        key={tema1}
                        Title='Transmisiones'
                        Tema={tema1}
                        Video={video1}
                        Descripcion='Transmisiones Youtube y Facebook'
                        />
                    <CardVideo 
                        key={tema2}
                        Title='Enseñanzas'
                        Tema={tema2}
                        Video={video2}
                        Descripcion='Enseñanzas por Facebook'
                        />
                    <CardVideo 
                        key={tema3}
                        Title='Predicaciones'
                        Tema={tema3}
                        Video={video3}
                        Descripcion='Predicaciones por Youtube'
                        />
                    </>
                ) : null } 
            </div>
        </Container>        
    )
}
export default Videos