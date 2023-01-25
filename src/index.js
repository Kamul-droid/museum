import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import App from './App';
import Advanced from './Containers/main/Pages/advancedSearch';
import Description from './Containers/main/Pages/description';
import 'jquery';
import 'bootstrap';
import './css/js/jquery.sticky';
import './css/js/click-scroll';
import './css/js/counter';
import './css/js/custom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Containers/main/Pages/notFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  
      <BrowserRouter>
        <Routes>
        <Route path='/' element= {<App/>}/>
        <Route path='/advanced_research' element= {<Advanced/>}/>
        <Route path='/details/:id/:d' element={<App/>}/>

        <Route path='*' element={<NotFound/>}> </Route>
        </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
