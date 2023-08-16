import React from 'react';
import './App.css';
import 'normalize.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </LocalizationProvider>
    </BrowserRouter>
  );
}

export default App;
