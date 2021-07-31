import { IStore } from '../../types';
import { getCurrencies } from '../History/selectors';
import { connect } from 'react-redux';
import { IStorePropsRateHistory } from './types';
import { RateCurrencyHistoryTable } from './RateCurrencyHistoryTable';

export const mapStateToProps = (store: IStore): IStorePropsRateHistory => ({
    currencies: getCurrencies(store),
});

export const ConnectedRateCurrencyHistoryTable = connect(mapStateToProps)(RateCurrencyHistoryTable);
