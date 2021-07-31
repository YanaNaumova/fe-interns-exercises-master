export interface IRateHistoryProps extends IStorePropsRateHistory{
    historyCurrencies: string;
}

export interface IStorePropsRateHistory {
    currencies: Record<string, Record<string, number>>
}
