import React from 'react'
import { IconButton, Avatar } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from './features/mailSlice';

const EmailBody = ({ name, email, subject, message, time }) => {
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const openEmail = () => {
        dispatch(openMessage({
            name,
            email,
            subject,
            message,
            time
        }))
        navigate('/detail')
    }
    return (
        <div className='emailbody' onClick={openEmail}>
            <div className="emailbody__left">
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelOutlinedIcon />
                </IconButton>
                <h4>{name}</h4>
            </div>
            <div className="emailbody__middle">
                <div className='emailbody__middle__msg'>
                    <p><b>[{subject}]</b> &nbsp;&nbsp;{message}</p>
                </div>
            </div>
            <div className="emailbody__right">

                <p>{time}</p>
            </div>
        </div>
    )
}

export default EmailBody