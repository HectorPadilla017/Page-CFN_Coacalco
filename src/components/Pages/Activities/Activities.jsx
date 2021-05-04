import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TextLeft2 from '../../Content/Text/TextLeft2'
import TextRight from '../../Content/Text/TextRight'
import TextLeft from '../../Content/Text/TextLeft'
import CoverPages from '../../Content/CoverPages/CoverPages'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import foto from '../../../img/Cover1.jpg'

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
const Activities = () => {

    const [act, setAct] = useState([])
    
    useEffect(() => {
        ActivitiesApi()
    }, [])

    async function ActivitiesApi (){
        const res = await axios.get('/Info.json', {withCredentials:true})
        .then((res) => {
            setAct(res.data.Actividades2)
        });
    }
    const classes = useStyles()
    return (
        <Container className={classes.root} disableGutters maxWidth='xl'>
            <CoverPages 
                img={foto}
                title={'Actividades'}
            />
            <div className={classes.content}>
                {
                    act.map(item => {
                        if(item.id == 1){
                            return (
                                <TextLeft2
                                    key={item.id}
                                    Img={item.Img}
                                    Nombre={item.Nombre}
                                    Titulo={item.Titulo}
                                    Subtitulo={item.Subtitulo}
                                    Descripción={item.Descripción}
                                />
                            )
                        } else if(item.id % 2 == 0) {
                            return (
                                <TextRight
                                    key={item.id}
                                    Img={item.Img}
                                    Nombre={item.Nombre}
                                    Titulo={item.Titulo}
                                    Subtitulo={item.Subtitulo}
                                    Descripción={item.Descripción}
                                />
                            )
                        } else {
                            return (
                                <TextLeft
                                    key={item.id}
                                    Img={item.Img}
                                    Nombre={item.Nombre}
                                    Titulo={item.Titulo}
                                    Subtitulo={item.Subtitulo}
                                    Descripción={item.Descripción}
                                />
                            )
                        }
                        // if(item.id % 2 == 0){
                        //     return (
                        //         <TextRight
                        //             key={item.id}
                        //             Img={item.Img}
                        //             Nombre={item.Nombre}
                        //             Titulo={item.Titulo}
                        //             Subtitulo={item.Subtitulo}
                        //             Descripción={item.Descripción}
                        //             />
                        //             )
                        //     } else {
                        //     return (
                        //         <TextLeft
                        //             key={item.id}
                        //             Img={item.Img}
                        //             Nombre={item.Nombre}
                        //             Titulo={item.Titulo}
                        //             Subtitulo={item.Subtitulo}
                        //             Descripción={item.Descripción}
                        //         />
                        //     )
                        // }
                    })
                }
                
            </div>
        </Container>        
    )
}
export default Activities