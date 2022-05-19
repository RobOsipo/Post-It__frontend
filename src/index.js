import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import PostContextProvider from './context/PostContextProvider';
import './index.scss';
import App from './App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </BrowserRouter>
  
);


