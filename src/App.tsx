import { Container, Fade, Grow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Convert from './components/Convert'
import { Valute } from './types'

export default function App() {

  const [rates, setRates] = useState<Valute | null>(null)
  const [date, setDate] = useState<string>()

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => (res.json()))
      .then((json) => {
        const valute = json.Valute
        setRates(valute)
        const date = new Date(json.Date)
        setDate(date.toLocaleDateString())
      })
      .catch((err) => {
        console.log(err.message)
      })
  },[])

  return (
    <>
      <Fade in={!!date} timeout={1200} unmountOnExit>
        <Container sx={{fontSize: 14, paddingTop: 3}}>
          <span>Курс ЦБ на {date}</span>
        </Container>
      </Fade>
      <Grow in={!!rates} timeout={600} unmountOnExit>
        <div>
        {rates && 
        <Convert rates={rates}/>}
        </div>
      </Grow>
    </>
  )
}
