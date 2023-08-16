import react, { useEffect, useState } from 'react';
import './Time.scss'
import dayjs, {Dayjs} from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Time() {
  const today = dayjs().format('YYYY-MM-DD');
  const [date, setDate] = useState<string>(today);
  const [week, setWeek] = useState<string[]>([]);
  const [timelines, setTimelines] = useState<string[]>([]);

  const navigate = useNavigate(); 

  useEffect(() => {
    const res = [];
    for(let i = 0; i < 7; i++){
      res.push(dayjs().add(i, 'day').format('YYYY-MM-DD'));
    }
    setWeek(res);
  }, []);

  useEffect(() => {
    const res = [];
    // time from 9:00 to 18:00 one day every 30 minutes from 9:00 to 18:00
    for(let i = 8; i < 16; i++){
      for(let j = 0; j < 60; j+=30){
        res.push(`${i}:${j < 10 ? `0${j}` : j}`);
      }
    }
    
    setTimelines(res);
  },[])

  const handleChange = (event: SelectChangeEvent<string>) => {
    setDate(event.target.value);
  }

  const handleClick = () => {
    navigate('/userForm');
  }

  return (
    <div className="time">
      <h1>Заказ талона</h1>
      <h2>Выберите дату и время</h2>
      {week.length > 0 && (
        <FormControl  sx={{ display: 'flex', alignItems: 'center', width: 'max-content', minWidth: 120, margin: '30px auto' }}>
        <InputLabel id="date_select">Дата</InputLabel>
        <Select
          labelId="date_select"
          id="date_select"
          value={date}
          label="Дата"
          onChange={(e) => handleChange(e)}
        >
          {week.map((item, index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      )}
      <div className="time_container">
        {timelines.map((item, index) => (
          <div onClick={handleClick} className="time_item">{item}</div>
        ))}
      </div>
      
    </div>
  );
}