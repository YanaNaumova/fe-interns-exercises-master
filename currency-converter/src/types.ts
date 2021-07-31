import { IHistoryStore } from './components/History/types';

export interface IStore {
    history: IHistoryStore;
}

export interface IAction {
    type: string;
}
