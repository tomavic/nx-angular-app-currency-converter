const api = 'http://data.fixer.io/api';
const headers = {
  Accept: 'application/json',
};

export const getSymbols = async (): Promise<unknown[]> => {
  const serviceId = 'access_key=c2d005d3b3b37d6b85df951882186ec3';
  const res = await fetch(`${api}/symbols?${serviceId}`, { headers });
  const data = await (res.json() as Promise<{ currency: unknown[] }>);
  return data.currency;
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

export const convert = async (
  from?: string,
  to?: string,
  amount?: string
): Promise<unknown[]> => {
  const serviceId = 'access_key=c2d005d3b3b37d6b85df951882186ec3';
  const fromId = `from=${from}`;
  const toId = `to=${to}`;
  const amountId = `amount=${amount}`;
  const res = await fetch(
    `${api}/convert?${serviceId}?${fromId}?${toId}?${amountId}`,
    { headers }
  );
  const data = await (res.json() as Promise<{ data: unknown[] }>);
  return data.data;
};

