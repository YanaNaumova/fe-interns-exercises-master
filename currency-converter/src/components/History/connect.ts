import { connect } from 'react-redux';

import { IDispatchPropsHistory } from './types';
import { setCurrencies } from './actions';
import { History } from './History';

export const mapDispatchToProps: IDispatchPropsHistory = {
    setCurrencies,
}

export const ConnectedHistory = connect(undefined, mapDispatchToProps)(History);
