import { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { tickersData } from "../store/reducer";

const TickerItem = ({ tickerData }) => {

    const [trend, setTrend] = useState(false);
    const { ticker, price, change, change_percent, dividend, yield: income, last_trade_time } = tickerData;

    const companies = {
        AAPL: "Apple",
        GOOGL: "Alphabet",
        MSFT: "Microsoft",
        AMZN: "Amazon",
        FB: "Facebook",
        TSLA: "Tesla",
    };

    const { previousTickers } = useSelector(tickersData);

    useEffect(() => {
        const getData = previousTickers.find(previousData => previousData.ticker === ticker);
        const trend = getData ? getData.change_percent < change_percent : null;
        setTrend(trend);
    }, [previousTickers, change_percent, ticker]);

    const time = new Date(last_trade_time);

    return (
        <tr>
            <td>{companies[ticker]}</td>
            <td style={{ background: trend ? "rgb(0 128 0 / 39%)" : "rgb(255 0 0 / 39%)" }}>{ticker}</td>
            <td>{price} $</td>
            <td>{change} $</td>
            <td style={{ background: trend ? "rgb(0 128 0 / 39%)" : "rgb(255 0 0 / 39%)" }}>{trend ? "↑" : "↓"} {change_percent} %</td>
            <td>{dividend}</td>
            <td>{income} %</td>
            <td>{time.toLocaleTimeString()} ({time.toLocaleDateString()})</td>
        </tr>
    );
};

export default TickerItem;


