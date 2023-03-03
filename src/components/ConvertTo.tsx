import { Container, FormControl, MenuItem, Select, SelectChangeEvent, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DEFAULT_VALUTES } from "./Convert";

export const ConvertTo = ({valutesList, valueToConvert, valute, amount, onChangeValute}: {
  valutesList: Array<string>, 
  valueToConvert: number,
  valute: string,
  amount: number,
  onChangeValute: (newValute: string) => void
}) => {

return (
  <Container sx={{
          paddingTop: 1,
        }}>
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
      disabled
      fullWidth
      inputProps={{style: {fontSize: 32, fontWeight: 900}}}
      sx={{marginY: 1}}
      type="number"
      value={amount}
    />
    </Container>
)
}