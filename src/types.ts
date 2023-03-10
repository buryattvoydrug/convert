export interface Valute {
  [key: string]: ValuteValue;
}

export interface ValuteValue {
  ID:       string;
  NumCode:  string;
  CharCode: string;
  Nominal:  number;
  Name:     string;
  Value:    number;
  Previous: number;
}
