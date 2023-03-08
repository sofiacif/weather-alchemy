import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src={logo} className="App-logo text-center mt-5" alt="logo" />
      </div>
      <div className="mt-5">
        <h1 className="text-center main-color">WEATHER ALCHEMY</h1>
        <h2>Unleash the Elements in Your Forecast</h2>
      </div>
      <Search />
    </div>
  );
}

export default App;
