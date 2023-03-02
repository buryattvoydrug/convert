import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { DEFAULT_VALUTES } from './Convert'

export const ConvertFrom = ({valutesList, handleChange, valute, onChangeValute} : {
  valutesList: Array<string>, 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  valute: string,
  onChangeValute: (newValute: string) => void
}) => {

return (
  <Container>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <ToggleButtonGroup
            sx={{height: 50}}
            value={valute}
            onChange={(event: React.MouseEvent<HTMLElement>, newValute: string) => newValute && onChangeValute(newValute)}
            exclusive 
            aria-label="outlined button group">
        {DEFAULT_VALUTES.map((item) => 
          <ToggleButton key={item} value={item}>{item}</ToggleButton>
        )}
      </ToggleButtonGroup>
      <FormControl sx={{width: 100}}>
        <Select
          sx={{height: 50}}
          value={valute}
          onChange={(event: SelectChangeEvent) => event.target.value && onChangeValute(event.target.value)}
        >
          {valutesList.map((item) => 
            <MenuItem key={item} value={item}>{item}</MenuItem>
          )}
        </Select>
        
      </FormControl>
    </div>
    <TextField
      fullWidth
      inputProps={{style: {fontSize: 32}}}
      sx={{marginY: 1}}
      type="number"
      onChange={(event: React.ChangeEvent<HTMLInputElement>)=>handleChange(event)}
    />
  </Container>
)
}