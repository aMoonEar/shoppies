import "./App.css";
import NavigationBar from "./components/navigationBar.jsx";
import LandingInfo from "./components/landingInfo";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingInfo />
      <SearchBar />

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
