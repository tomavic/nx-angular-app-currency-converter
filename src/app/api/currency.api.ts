import { Currency } from '../models/currency.model';

const api = 'http://data.fixer.io/api';
const serviceId = 'access_key=c2d005d3b3b37d6b85df951882186ec3';
const headers = {
  Accept: 'application/json',
};

interface GetCurrencySymbolsResponse {
  success: boolean;
  symbols: object;
}

interface ConvertResponse {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    timestamp: number;
    rate: number;
  };
  historical: string;
  date: string;
  result: string;
}

interface LatestRateResponse {
  success: true;
  timestamp: 1519296206;
  base: 'USD';
  date: '2023-06-06';
  rates: {
    GBP: 0.72007;
    JPY: 107.346001;
    EUR: 0.813399;
  };
}

export const getSymbols = async (): Promise<Currency[]> => {
  const res = await fetch(`${api}/symbols?${serviceId}`, { headers });
  const data = await (res.json() as Promise<GetCurrencySymbolsResponse>);
  return Object.entries(data.symbols).map(([key, value]) => ({
    name: value,
    value: key,
  }));
};

export const convert = async (
  from: string,
  to: string,
  amount: number
): Promise<ConvertResponse> => {
  const fromId = `from=${from}`;
  const toId = `to=${to}`;
  const amountId = `amount=${amount}`;
  const res = await fetch(
    `${api}/convert?${serviceId}&${fromId}&${toId}&${amountId}`,
    { headers }
  );
  const data = await (res.json() as Promise<ConvertResponse>);
  return data;
};

export const getLatestNine = async (
  base: string
): Promise<LatestRateResponse> => {
  const baseId = `base=${base}`;
  const symbols = 'symbols=GBP,JPY,EUR';
  const res = await fetch(`${api}/latest?${serviceId}&${baseId}&${symbols}`, {
    headers,
  });
  const data = await (res.json() as Promise<LatestRateResponse>);
  return data;
};
