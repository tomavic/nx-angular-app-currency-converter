import { createContext, useContext, useReducer } from 'react';
import { Currency } from '../models/currency.model';

export type AppState = {
  loading: boolean;
  currencyListFrom: Array<Currency>;
  currencyListTo: Currency[];
  amount: number | null;
  currencyFrom: string;
  currencyTo: string;
  convertedAmount: number | null;
};

const INITIAL_STATE: AppState = {
  loading: true,
  currencyListFrom: [],
  currencyListTo: [],
  amount: null,
  currencyFrom: 'USD',
  currencyTo: '',
  convertedAmount: null,
};

type ActionType =
  | 'SET_LOADER'
  | 'SET_CURRENCY_LIST_FROM'
  | 'SET_CURRENCY_LIST_TO'
  | 'SET_AMOUNT'
  | 'SET_CURRENCY_FROM'
  | 'SET_CURRENCY_TO'
  | 'SET_CONVERTED_AMOUNT';

interface IAction {
  type: ActionType;
  payload: any;
}

const CurrencyContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<IAction>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

const currencyReducer = (state: AppState, action: IAction): AppState => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENCY_LIST_FROM':
      return { ...state, currencyListFrom: payload };
    case 'SET_CURRENCY_LIST_TO':
      return { ...state, currencyListTo: payload };

    case 'SET_CURRENCY_FROM':
      return { ...state, currencyFrom: payload };
    case 'SET_CURRENCY_TO':
      return { ...state, currencyTo: payload };

    case 'SET_AMOUNT':
      return { ...state, amount: payload };

    default:
      return state;
  }
};

function CurrencyProvider(props: any) {
  const [state, dispatch] = useReducer(currencyReducer, INITIAL_STATE);

  const data = { state, dispatch };

  return <CurrencyContext.Provider value={data} {...props} />;
}

function useCurrencyContext() {
  return useContext(CurrencyContext);
}

export { CurrencyProvider, useCurrencyContext };
