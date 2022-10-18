import React from 'react'
import './css/sidebar.css'

import SidebarOptions from './SidebarOptions';


import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VideocamIcon from '@mui/icons-material/Videocam';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


const Sidebar = () => {
    const dispatch = useDispatch()

    return (
        <div className='sidebar'>
            <Button className='compose__btn' startIcon={<AddIcon />} onClick={() => dispatch(openSendMessage())}>Compose</Button>
            <SidebarOptions Icon={InboxIcon} title="Inbox" number={212} isactive={true} />
            <SidebarOptions Icon={StarBorderIcon} title="Starred" number="5" />
            <SidebarOptions Icon={AccessTimeOutlinedIcon} title="Snoozed" number={3} />
            <SidebarOptions Icon={LabelOutlinedIcon} title="Important" number={3} />
            <SidebarOptions Icon={SendOutlinedIcon} title="Sent" number={1} />
            <SidebarOptions Icon={InsertDriveFileOutlinedIcon} title="Drafts" number={3} />
            <SidebarOptions Icon={LabelImportantOutlinedIcon} title="Categories" number={3} />

            <SidebarOptions Icon={ExpandMoreIcon} title="More" number="" />
            <SidebarOptions Icon={ExpandLessOutlinedIcon} title="Less" number="" />

            <SidebarOptions Icon={ScheduleSendOutlinedIcon} title="Scheduled" number="" />
            <SidebarOptions Icon={EmailOutlinedIcon} title="All Mail" number={300} />
            <SidebarOptions Icon={ReportOutlinedIcon} title="Spam" number={30} />
            <SidebarOptions Icon={DeleteForeverOutlinedIcon} title="Trash" number="" />
            <SidebarOptions Icon={SettingsOutlinedIcon} title="Manage labels" number="" />
            <SidebarOptions Icon={AddIcon} title="Create new label" number="" />

            <hr />
            <h3 className='sidebar__heading'>Meet</h3>
            <SidebarOptions Icon={VideocamIcon} title="New Meeting" number="" />
            <SidebarOptions Icon={VideocamIcon} title="Join a Meeding" number="" />
        </div>
    )
}

export default Sidebar