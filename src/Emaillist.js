import React, { useState, useEffect } from 'react'

import './css/emaillist.css'
import EmailBody from './EmailBody'
import EmaillistSetting from './EmaillistSetting'
import EmailType from './EmailType'

import { db } from "./firebaseConfig"
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

const Emaillist = () => {
    const [emails, setEmails] = useState([])


    /* function to get all tasks from firestore in realtime */
    useEffect(() => {
        const q = query(collection(db, 'emails'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot) => {
            setEmails(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    return (
        <div className='emaillist'>
            <EmaillistSetting />
            <EmailType />

            {
                emails.map(({ id, data }, index) => {
                    const emailDate = new Date(data.created?.seconds * 1000).toLocaleTimeString()
                    return (
                        <EmailBody key={index} name={data.fromName} email={data.from} subject={data.subject} message={data.message} time={emailDate} />
                    )
                })
            }

        </div>
    )
}

export default Emaillist