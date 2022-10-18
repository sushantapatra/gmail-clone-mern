import React from 'react'
import { IconButton, Avatar } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const EmailType = () => {
    return (
        <div className='emailtype'>
            <div className="emailtype__options emailtype__options--active">
                <IconButton>
                    <InboxIcon />
                </IconButton>
                <p>Primary</p>
            </div>
            <div className="emailtype__options">
                <IconButton>
                    <PeopleIcon />
                </IconButton>
                <p>Social</p>
            </div>
            <div className="emailtype__options">
                <IconButton>
                    <LocalOfferIcon />
                </IconButton>
                <p>Promotion</p>
            </div>
        </div>
    )
}

export default EmailType