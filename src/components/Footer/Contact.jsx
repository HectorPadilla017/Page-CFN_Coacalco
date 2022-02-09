import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
// import axios from 'axios'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#fff',
        width: '400px',
        margin: 'auto',
        padding: theme.spacing(4, 2, 2, 2),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(4, 0, 0, 0),
            width: '100%',
        },
        '& span': {
            fontSize: '1.4rem',
        },
    },
    input: {
        padding: theme.spacing(1,2,1),
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '260px',
        // height: '50px',
        fontSize: '1.8em',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    input2: {
        padding: theme.spacing(2,2),
        backgroundColor: '#fff',
        borderRadius: '10px',
        width: '370px',
        fontSize: '1.8em',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    title: {
        paddingBottom: '16px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    button: {
        margin: '10px 0',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        '& span': {
            fontSize: '1.6rem',
        }
    },
    snackbar: {
        '& div': {
            fontSize: '1.6rem',
        }
    }
}));

const Contact = () => {
    // const [sent, setSent] = useState(false)
    const { control, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data, e) => {
        e.preventDefault()
        // console.log(data)
        handleClick()
        // const name = data.name
        // const email = data.email
        // const message = data.message
        // let config = {
        //     method: 'post',
        //     url: `http://demo.cfn.org.mx/ServerMail/index.js`,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: {
        //         name,
        //         email,
        //         message,
        //     },
        // }
        // try {
        //     const res = await axios(config)
        //     if (res){
        //         reset()
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
        emailjs.sendForm('service_7jf4zuk', 'template_cyyuqwb', e.target, 'user_CnOvxsIIsbmFxx95Ybwoc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    // console.log(errors)
    // console.log(datos)
    
    const [open, setOpen] = useState(false);
    const handleClick = () => {
            setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Grid className={classes.title} container >
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        Contáctanos
                    </Typography>
                </Grid>
            </Grid>
                <form onSubmit={handleSubmit(onSubmit)} autoComplete='on'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Controller
                                className={classes.span}
                                name='name'
                                control={control}
                                defaultValue=''
                                rules={{ required: true, maxLength: 40, minLength: 3 }}
                                render={({field: { ref1, ...inputProps1 }}) => (
                                    <Input 
                                    {...inputProps1} 
                                    inputRef={ref1} 
                                    className={classes.input} 
                                    type='text' 
                                    placeholder='Nombre Completo'  
                                    disableUnderline 
                                    autoComplete='true'
                                    />
                                )}
                            /><br/>
                            {errors.name && errors.name.type === 'required' && (<span>Ingresa tu nombre</span>)}
                            {errors.name && errors.name.type === 'maxLength' && (<span>Maximo 40 caracteres</span>)}
                            {errors.name && errors.name.type === 'minLength' && (<span>Minimo 3 caracteres</span>)}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name='email'
                                control={control}
                                defaultValue=''
                                rules={{ required: true, pattern: /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/i}}
                                render={({field: { ref2, ...inputProps2 }}) => (
                                    <Input 
                                    {...inputProps2} 
                                        inputRef={ref2} 
                                        className={classes.input} 
                                        type='email' 
                                        placeholder='Correo Electronico'  
                                        disableUnderline 
                                        autoComplete='true'
                                    />
                                )}
                            /><br/>
                            {errors.email && errors.email.type === 'required' && (<span>Ingresa tu correo</span>)}
                            {errors.email && errors.email.type === 'pattern' && (<span>Correo Invalido</span>)}
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name='message'
                                control={control}
                                defaultValue=''
                                rules={{ required: true, maxLength: 1000, minLength: 5 }}
                                render={({field: { ref3, ...inputProps3 }}) => (
                                    <Input 
                                        {...inputProps3} 
                                        inputRef={ref3} 
                                        className={classes.input2} 
                                        type='text' 
                                        placeholder='Tu Mensaje'  
                                        disableUnderline 
                                        multiline 
                                        rows={6}
                                    />
                                )}
                            /><br/>
                            {errors.message && errors.message.type === 'required' && (<span>Ingresa tu Mensaje</span>)}
                            {errors.message && errors.message.type === 'maxLength' && (<span>Maximo 1000 caracteres</span>)}
                            {errors.message && errors.message.type === 'minLength' && (<span>Minimo 5 caracteres</span>)}
                        </Grid>
                    </Grid>
                <Button 
                    className={classes.button} 
                    type='submit'
                    variant='contained' 
                    color='primary'
                >
                    Enviar
                </Button>
                </form>
                <Snackbar
                    className={classes.snackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Mensaje Enviado"
                />
        </Box>
    )
}

export default Contact
