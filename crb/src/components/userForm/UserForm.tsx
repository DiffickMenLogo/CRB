import react, { useState } from 'react';
import './UserForm.scss'
import { Button, IconButton, Snackbar, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, {Dayjs} from 'dayjs';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router';

const StyledInput = styled(TextField)({
    display: 'block',
    width: 'max-content',
    margin: '0 auto'
  })
function UserForm() {
  const [value, setValue] = useState<Dayjs>(dayjs('2022-01-01'));
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();



  const handleClick = (e: react.FormEvent<HTMLFormElement>) => {
    if(e.target instanceof HTMLFormElement){
      e.preventDefault();
    }
    setOpen(true);
    setTimeout(() => {
      navigate('/');
    }, 6000);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Данные о пациенте сохранены
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        х
      </IconButton>
    </React.Fragment>
  );



  return (
    <div className='content' style={{ alignItems: 'center' }}>
      <div className="userForm_container">
        <h1>Заказ талона</h1>
        <h2>Данные пациента</h2>
        <form action="" onSubmit={(e) => handleClick(e)} className="userForm">
          <StyledInput fullWidth required id="standard-basic" label="Фамилия" variant="standard" className='input' />
          <StyledInput fullWidth required id="standard-basic" label="Имя" variant="standard" className='input'  />
          <StyledInput fullWidth required id="standard-basic" label="Отчество" variant="standard" className='input' />
          <StyledInput fullWidth required id="standard-basic" label="Телефон" variant="standard" className='input' />
          <StyledInput fullWidth required id="standard-basic" label="Адрес" variant="standard" className='input' />
          <DatePicker
            className='datapicker'
            label="Дата рождения"
            sx={{
              width: 'max-content',
              margin: '30px auto',
              display: 'block'
            }}
            value={value}
            onChange={(newValue: Dayjs | null) => setValue(newValue || dayjs())}
          />
          <Button type='submit' variant='contained' sx={{
            width: 'max-content',
            margin: '30px auto',
            display: 'block'
          }}>Продолжить</Button>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Успешно"
        action={action}
      />
    </div>
  )
}

export default UserForm;