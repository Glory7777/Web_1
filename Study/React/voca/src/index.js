import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=> {
root.render(
  <React.StrictMode>
    <Library/>
    <Clock/>
    <CommentList />
    <NotificationList/>
    <Accommodate/>
    <ConfirmButton/>
    <LandingPage/>
  </React.StrictMode>
);
}, 1000);
