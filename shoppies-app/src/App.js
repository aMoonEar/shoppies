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
    </div>
  );
}

export default App;
