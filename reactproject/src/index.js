import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './Banner'
import Card from './Faculty';
import LayoutMani from './Layout';
import { AddData, StudentCard } from './CardUsingApi';
import { StudentDetail } from './CardUsingApi';
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
import App from './App';
import reportWebVitals from './reportWebVitals';
import EditFac from './editFac';

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutMani />}>
          <Route path='/cards' element={<Card />} />
          <Route path='/card2' element={<StudentCard/>}/>
          <Route path='/home' element={<Banner/>}/>
          <Route path='/Detail/:id' element={<StudentDetail/>}/>
          {/* <Route path='/edit/:id' element={<EditFac/>}/> */}
          <Route path='/add' element={<AddData status="true"/>}/>   
          <Route path='/edit/:id' element={<AddData/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

