import { IStore } from '../../types';

export const getCurrencies = (store: IStore): Record<string, Record<string, number>> =>
    store.history.currencies;
