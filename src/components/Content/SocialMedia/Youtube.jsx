import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Youtube = (props) => {
    return (
        <IconButton className={props.className} href='http://www.youtube.com/user/gkmbio' target='_blank' rel="noopener">
                <YouTubeIcon/>
        </IconButton>
    )
}
export default Youtube