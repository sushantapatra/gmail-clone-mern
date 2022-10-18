import React from 'react'
import './css/sidebaroptions.css'
import Button from '@mui/material/Button';

const SidebarOptions = ({ Icon, title, number, isactive }) => {
    return (
        <div className={`sidebarOptions ${isactive && 'active'}`}>
            <Icon />
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOptions