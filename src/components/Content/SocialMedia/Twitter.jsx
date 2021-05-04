import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';

const Twitter = (props) => {
    return (
        <IconButton className={props.className} href='http://www.twitter.com/cfnac' target='_blank' rel="noopener">
                <TwitterIcon/>
        </IconButton>
    )
}
export default Twitter
