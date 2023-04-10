import TickerList from "./components/TickerList";
import "./App.css";


function App() {
  return (
      <div className="App">
          <div className="title-block">
              <h1>Incode group & Finance</h1>
              <h3>Currency table</h3>
          </div>
          <TickerList />
      </div>
  );
}

export default App;
