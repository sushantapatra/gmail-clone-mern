import React from 'react'
import './css/header.css'

import { IconButton, Avatar } from '@mui/material';
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import logo from './images/gmail.png'

import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signout } from './features/userSlice';
import { signOut } from "firebase/auth";
import { db, auth, provider } from './firebaseConfig'

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const userSignOut = () => {
        signOut(auth).then(() => {
            dispatch(signout(null))
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <>
            <div className='header'>
                <div className="header__left">
                    <IconButton>
                        <ReorderIcon />
                    </IconButton>
                    <img src={logo} alt="logo" height={20} width={30} /> &nbsp;&nbsp;&nbsp;&nbsp;
                    Gmail
                </div>
                <div className="header__middle">
                    <div className="search_mail">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        <input type="text" placeholder='Search in mail' />
                        <IconButton>
                            <TuneIcon />
                        </IconButton>
                    </div>
                </div>
                <div className="header__right">
                    <IconButton>
                        <HelpOutlineOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <Avatar src={user?.photoURL} onClick={userSignOut}></Avatar>
                </div>
            </div>




        </>
    )
}

export default Header