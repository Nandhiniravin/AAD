import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainMenu from './MainMenu';
import Login from'./Login';
import SignUp from './SignUp';
import AddBookings from './AddBookings';


import BookingTable from './BookingTable';
import Admindash from './Admindash';




function App() {
  return(
    <>
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route path='/Signup' element={<SignUp/>}></Route>
     <Route path='/admin' element={<Admindash/>}></Route>
     <Route path = '/mainmenu' element={<MainMenu/>}></Route>
     <Route path ='/add'element={<AddBookings/>}></Route>
    <Route path='/admindash' element={<Admindash/>}></Route>
     <Route path='/table' element={<BookingTable/>}></Route>
     </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App
