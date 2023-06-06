import { Currency } from '../models/currency.model';

const api = 'http://data.fixer.io/api';
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

export const getSymbols = async (): Promise<Currency[]> => {
  const serviceId = 'access_key=c2d005d3b3b37d6b85df951882186ec3';
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
  const serviceId = 'access_key=c2d005d3b3b37d6b85df951882186ec3';
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
  base?: string,
  symbols?: Array<string>
): Promise<unknown[]> => {
  const serviceId = 'access_key=c2d005d3b3b37d6b85df951882186ec3';
  const baseId = `base=${base}`;
  const res = await fetch(`${api}/latest?${serviceId}?${baseId}`, { headers });
  const data = await (res.json() as Promise<{ currency: unknown[] }>);
  return data.currency;
};
