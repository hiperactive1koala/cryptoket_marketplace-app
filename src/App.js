import React from 'react'
import {  Route, Routes ,useLocation} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Explore from './Pages/Explore/Explore'
import './App.css'
import User from './Pages/User/User';
import Item from './Pages/Item/Item';
import Create from './Pages/Create/Create';

const App = () => {
	// console.log(useLocation())
  return (
	<div className='app__wrapper'>
		<Navbar activePage={useLocation().pathname}/>
		<Routes>
			<Route exact path="/" element={<Explore/>}/>
			<Route path="/user-profile" element={<User/>}/>
			<Route path="/item" element={<Item/>}/>
			<Route path="/create" element={<Create/>}/>
		</Routes>
	</div>
  )
}

export default App