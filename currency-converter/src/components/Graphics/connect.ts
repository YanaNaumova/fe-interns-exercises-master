import { IStore } from '../../types';
import { getCurrencies } from '../History/selectors';
import { connect } from 'react-redux';
import { IStorePropsChartContainer } from './types';
import { ChartContainer } from './Graphics';

export const mapStateToProps = (store: IStore): IStorePropsChartContainer => ({
    currencies: getCurrencies(store),
});

export const ConnectedChartContainer = connect(mapStateToProps)(ChartContainer);
