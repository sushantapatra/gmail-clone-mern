import React from 'react'
import EmaillistSetting from './EmaillistSetting';
import './css/emaillist.css'
import './css/emaildetails.css'

import { IconButton, Avatar } from '@mui/material';

import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useSelector } from 'react-redux';
import { selectedMail } from './features/mailSlice';

import { useNavigate } from 'react-router-dom';
const EmailDetail = () => {
    const mailDetails = useSelector(selectedMail)
    // const dateTime = new Date(mailDetails.time).toISOString()
    let navigate = useNavigate();
    console.log(mailDetails);
    return (
        <div className='emaillist'>
            <div className='emaillist__setting'>
                <div className="emaillist__settingsLeft">
                    <IconButton>
                        <ArrowBackIcon onClick={() => navigate('/')} />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emaillist__settingsRight">
                    <p>1-50 of 10,222</p>
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>

                </div>
            </div>
            <div className="emaildetails__message">
                <div className="emaildetails__header">
                    <div className="emaildetails__headerLeft">
                        <h4>{mailDetails.subject}</h4>
                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>
                    </div>
                    <div className="emaildetails__headerRight">
                        <IconButton>
                            <LocalPrintshopIcon />
                        </IconButton>
                        <IconButton>
                            <LaunchIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="emaildetails__middleheader">
                    <div className="emaildetails__middleheaderLeft">
                        <Avatar sx={{ width: 33, height: 33 }}> SP </Avatar>
                        <h4>{mailDetails.name}</h4>
                        <p>{mailDetails.email}</p>
                    </div>
                    <div className="emaildetails__middleheaderRight">
                        <p>{mailDetails.time}</p>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                        <IconButton>
                            <ReplyIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="emaildetails__body">
                    <p>{mailDetails.message}</p>
                </div>
            </div>
        </div>

    )
}

export default EmailDetail