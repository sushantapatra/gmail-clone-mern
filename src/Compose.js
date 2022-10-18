import React, { useState } from 'react'
import './css/compose.css'
import { IconButton, Avatar } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PhotoIcon from '@mui/icons-material/Photo';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from "./firebaseConfig"
import { collection, addDoc, Timestamp } from 'firebase/firestore'

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Compose = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const formSubmit = (event) => {
        event.preventDefault()
        if (to == "") {
            return alert('To is required!')
        }
        if (subject == "") {
            return alert('Subject is required!')
        }
        if (message == "") {
            return alert('Message is required!')
        }
        addDoc(collection(db, 'emails'), {
            to: to,
            from: user.email,
            fromName: user.displayName,
            subject: subject,
            message: message,
            created: Timestamp.now()
        }).catch(err => console.error(err))
        dispatch(closeSendMessage())
        alert("email sent successfully")
    }


    return (
        <div className='compose'>
            <div className="compose__header">
                <div className="compose__header__left">
                    <span>New Message</span>
                </div>
                <div className="compose__header__right">
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closeSendMessage())} />
                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className="compose__body">
                    <div className="compose__bodyForm">
                        <input type="email" placeholder='Reciepents' name="email" value={to} onChange={(e) => setTo(e.target.value)} />
                        <input type="text" placeholder='Subject' name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <textarea name="message" id="" cols="30" rows="20" placeholder="Meessages..." value={message} onChange={(e) => setMessage(e.target.value)}>{message}</textarea>
                    </div>
                </div>
                <div className="compose__footer">
                    <div className="compose__footerLeft">
                        <button type="submit">Send
                            <ArrowDropDownIcon />
                        </button>
                    </div>

                    <div className="compose__footerRight">
                        <AttachFileIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhotoIcon />
                        <PhonelinkLockIcon />
                        <CreateIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose