export interface IPropsChartContainer extends IStorePropsChartContainer{
    historyCurrencies: string;
}

export interface IStorePropsChartContainer {
    currencies: Record<string, Record<string, number>>
}
