import React from 'react';
import './Doctors.scss';
import { Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Iprops{
  setSelectedDoctor: (doctor: string) => void
}

function Doctors( props : Iprops) {
  const doctors = ['Врач-акушер-гинеколог', 'Врач-дерматовенеролог', 'Врач-кардиолог', 'Врач-невролог', 'Врач-онколог', 'Врач-оториноларинголог', 'Врач-офтальмолог', 'Врач-психиатр детский', 'Врач-психиатр-нарколог (нарколог)', 'Врач-психиатр-нарколог (психиатр)', 'Врач-психотерапевт', 'Врач-уролог', 'Врач-хирург', 'Врач-эндокринолог'];
  
  const navigate = useNavigate();


  const handleClick = (doctor: string) => {
    props.setSelectedDoctor(doctor);
    navigate('/names')
  }

  return (
    <div className="doctors_container">
      <h1>Заказ талона</h1>
      <h2>Выбор специальности</h2>
      <div className="doctors">
        {doctors.map((doctor, index: number) => (
          <Box onClick={() => handleClick(doctor)} key={index} className="doctors_item">
            {doctor}
          </Box>
        ))}
      </div>
    </div>
  );
}

export default Doctors