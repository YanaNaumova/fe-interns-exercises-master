import { IActionSetCurrencyRates } from './types';

export const setCurrencies = (currencies: Record<string, Record<string, number>>): IActionSetCurrencyRates => ({
    type: 'SET_CURRENCIES',
    payload: currencies
});
