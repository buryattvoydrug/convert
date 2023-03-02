import { ButtonGroup, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { Valute } from '../types';
import { ConvertFrom } from './ConvertFrom';
import { ConvertTo } from './ConvertTo';

export const DEFAULT_VALUTES = ['RUB', 'USD', 'EUR', 'GBP']

function Convert({rates}: {rates: Valute}) {

  const [valuteFrom, setValuteFrom] = useState('RUB')
  const [valuteTo, setValuteTo] = useState('USD')

  const [valueToConvert, setValueToConvert] = useState(0)
  const valutesList = Object.keys(rates)
  valutesList.push('RUB')

  const handleChangeValueToConvert = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueToConvert(+event.target.value)
  }

  const amountTo = valuteTo === 'RUB' 
                   ? 1
                   : rates[valuteTo].Value
  const amountFrom = valuteFrom === 'RUB' 
                     ? 1
                     : rates[valuteFrom].Value
  const amount = amountFrom / amountTo

  return (
    <>
      <Container sx={{fontSize: 22}}>
        <h1 style={{marginBottom: 10}}>{valuteFrom} → {valuteTo}</h1>
      </Container>
     
      <ConvertFrom 
        valutesList={valutesList} 
        valute={valuteFrom}
        onChangeValute={setValuteFrom}
        handleChange={handleChangeValueToConvert}
        />
      <ConvertTo 
        valutesList={valutesList} 
        valute={valuteTo}
        onChangeValute={setValuteTo}
        valueToConvert={valueToConvert}
        amount={amount}
        />
    </>
  );
}

export default Convert;
