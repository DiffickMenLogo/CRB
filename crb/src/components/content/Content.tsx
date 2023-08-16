import react, { useState } from 'react';
import './Content.scss'
import UserForm from '../userForm/UserForm';
import Doctors from '../doctors/Doctors';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Route, Routes } from 'react-router';
import Names from '../names/Names';
import Time from '../time/Time';

function Content() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <Routes>
      <Route path='/' element={<Doctors setSelectedDoctor={setSelectedDoctor} />} />
      <Route path='/userForm' element={<UserForm />} />
      <Route path='/names' element={<Names selectedDoctor={selectedDoctor} />} />
      <Route path='/time' element={<Time />} />
    </Routes>
  );
}

export default Content;