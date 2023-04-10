export const getTickersRequested = () => ({
    type: "GET_TICKERS_REQUESTED",
});

export const getTickersActual = (tickers) => ({
    type: "GET_TICKERS_ACTUAL",
    payload: tickers,
});

export const getTickersPrevious = (tickers) => ({
    type: "GET_TICKERS_PREVIOUS",
    payload: tickers,
});

export const getTickersError = () => ({
    type: "GET_TICKERS_ERROR",
});


export const getTickers = (tickers) => (dispatch, getState) => {
    dispatch(
        getTickersPrevious(
            getState().tickers.actualTickers.map(({ ticker, change_percent }) => ({
                ticker,
                change_percent,
            }))
        )
    );
    dispatch(getTickersActual(tickers));
};
