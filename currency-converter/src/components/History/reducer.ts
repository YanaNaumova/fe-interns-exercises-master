import { IHistoryStore, IActionSetCurrencyRates } from './types';
import { IAction } from '../../types';

const initialState: IHistoryStore = {
    currencies: {},
}

export const historyReducer = (store: IHistoryStore | undefined = initialState, action: IAction): IHistoryStore => {
    if (isSetCurrenciesAction(action)) {
       return ({
           currencies: action.payload
       });
    }

    return store;
};

const isSetCurrenciesAction = (action: IAction): action is IActionSetCurrencyRates =>
    action.type === 'SET_CURRENCIES';
