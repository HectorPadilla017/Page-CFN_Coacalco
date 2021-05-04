import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';

const Facebook = (props) => {
    return (
        <IconButton className={props.className} href='http://www.facebook.com/cfnac' target='_blank' rel="noopener">
                <FacebookIcon/>
        </IconButton>
    )
}
export default Facebook
