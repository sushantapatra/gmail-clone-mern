import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';


import Compose from './Compose';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailDetail from './EmailDetail';

import { Routes, Route } from "react-router-dom";
import Login from './Login';

function App() {
	const isMessageOpen = useSelector(selectSendMessageIsOpen)
	const user = useSelector(selectUser)

	useEffect(() => {

	}, [])

	console.log(user);
	return (
		<div className="App">
			{user ? (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Routes>
							<Route exact path="/" element={<Emaillist />} />
							<Route path="detail" element={<EmailDetail />} />
						</Routes>
					</div>
				</>
			) : <Login />}
			{isMessageOpen && <Compose />}


		</div>


	);
}

export default App;
