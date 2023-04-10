const initialState = {
    actualTickers: [],
    previousTickers: [],
    loading: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "GET_TICKERS_REQUESTED":
            return {
                ...state,
                loading: true,
                error: false,
            };

        case "GET_TICKERS_ACTUAL":
            return {
                ...state,
                actualTickers: payload,
                loading: false,
                error: false,
            };

        case "GET_TICKERS_PREVIOUS":
            return {
                ...state,
                previousTickers: payload,
                loading: false,
                error: false,
            };

        case "GET_TICKERS_ERROR":
            return {
                ...state,
                loading: false,
                error: true,
            };


        default:
            return state;
    }
};

export const tickersData = (state) => state.tickers;
export default reducer;
