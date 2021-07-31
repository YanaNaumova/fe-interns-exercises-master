export interface IActionSetCurrencyRates {
    type: 'SET_CURRENCIES';
    payload: Record<string, Record<string, number>>;
}

export interface IHistoryStore {
    currencies: Record<string, Record<string, number>>;
}

export interface IPropsHistory extends IDispatchPropsHistory {}

export interface IDispatchPropsHistory {
    setCurrencies: (currencies: Record<string, Record<string, number>>) => void;
}
