import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {getTickers, getTickersError, getTickersRequested} from "../store/actions";
import { tickersData } from "../store/reducer";
import TickerItem from "./TickerItem";


const socket = io("http://localhost:4000");

const TickerList = () => {
    const dispatch = useDispatch();
    const { actualTickers } = useSelector(tickersData);

    useEffect(() => {
        dispatch(getTickersRequested());
        socket.emit("start");

        socket.on("ticker", (quotes) => {
            dispatch(getTickers(quotes));
        });

        socket.on("connect_error", () => {
            dispatch(getTickersError());
        });

        return () => {
            socket.removeAllListeners();
        };
    }, [dispatch]);

    const titles = [
        "company",
        "ticker",
        "price",
        "change",
        "change percent",
        "dividend",
        "yield",
        "last trade time",
    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        {titles.map((title) => (
                            <th key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {actualTickers.map((tickerData) => (
                        <TickerItem
                            key={tickerData.ticker}
                            tickerData={tickerData}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TickerList;
