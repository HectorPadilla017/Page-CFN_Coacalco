import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        maxHeight: '45px',
        color: '#fff',
        backgroundColor: '#313131',
        textAlign: 'center',
        padding: theme.spacing(2, 0)
    },
}))

const Copyright = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant="body2" color="initial">
                @Copyright 2021 All Rights Reserved
            </Typography>
        </div>
    )
}

export default Copyright
