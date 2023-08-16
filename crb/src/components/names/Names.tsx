import React, { useEffect, useState } from 'react';
import './Names.scss'
import { useNavigate } from 'react-router';

function Names({selectedDoctor} : {selectedDoctor: string}) {
  const names = [
    {doctor: 'Врач-акушер-гинеколог', names: ['Литвинчук О.А.', 'Лохина Т.М.','Угляница Е.Н.', 'Кудласевич Л.В.'], cabinetes: ['каб.3','каб.6','каб.5','каб.2']},
    {doctor: 'Врач-дерматовенеролог', names: ['Козинец А.М.'], cabinetes: ['каб.202']},
    {doctor: 'Врач-кардиолог', names: ['Подоровская Л.В.'], cabinetes: ['каб.312']},
    {doctor: 'Врач-невролог', names: ['Бухта С.В.'], cabinetes: ['каб.208']},
    {doctor: 'Врач-онколог', names: ['Шуйская О.В.'], cabinetes: ['каб.305']},
    {doctor: 'Врач-оториноларинголог', names: ['Ляшевич И.Е.','Морголь Г.Н.' ], cabinetes: ['каб.308','каб.7']},
    {doctor: 'Врач-офтальмолог', names: ['Масюк В.Г.','Савчук Г.В.' ], cabinetes: ['каб.107','каб.107']},
    {doctor: 'Врач-психиатр детский', names: ['Гузаревич В.А.'], cabinetes: ['каб.301']},
    {doctor: 'Врач-психиатр-нарколог (нарколог)', names: ['Кудласевич А.М.'], cabinetes: ['каб.302']},
    {doctor: 'Врач-психиатр-нарколог (психиатр)', names: ['Гузаревич В.А.'], cabinetes: ['каб.301']},
    {doctor: 'Врач-психотерапевт', names: ['Гутовец А.В.'], cabinetes: ['каб.204']},
    {doctor: 'Врач-уролог', names: ['Курневич Ж.В.'], cabinetes: ['каб.311']},
    {doctor: 'Врач-хирург', names: ['Лешкевич А.Н.','Лысюк М.С.','Мовчанюк Г.В.' ], cabinetes: ['каб.313','каб.110','каб.110']},
    {doctor: 'Врач-эндокринолог', names: ['Крокун О.В.'], cabinetes: ['каб.314']},
  ] 

  const navigate = useNavigate();

  const [doctor, setDoctor] = useState<any>({
    doctor: '',
    names: [],
    cabinetes: []
  });

  useEffect(() => {
    const findedDoctor = names.find(item => item.doctor === selectedDoctor);
    if (findedDoctor) {
      setDoctor(findedDoctor);
    }
  }, [selectedDoctor]);

  
  
  return (
    <div className="names">
      <h1>Выберите специалиста</h1>
      <h2>{doctor.doctor}</h2>
      <div className="names_container">
        {doctor.names.map((name: string, index: number) => (
          <div onClick={() => navigate('/time')} className='names_item'>
            <h3>{name}</h3>
            <h4>{doctor.cabinetes[index]}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Names