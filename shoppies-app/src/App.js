import "./App.css";
import NavigationBar from "./components/navigationBar.jsx";
import LandingInfo from "./components/landingInfo";
import Search from "./components/searchBar";

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      <LandingInfo />
      <Search />
    </div>
  );
}

export default App;
