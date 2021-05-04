import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';

const Instagram = (props) => {
    return (
        <IconButton className={props.className} href='http://www.instagram.com/cfn_coacalco' target='_blank' rel="noopener">
                <InstagramIcon/>
        </IconButton>
    )
}
export default Instagram