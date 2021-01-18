import "./App.css";
import NavigationBar from "./components/navigationBar.jsx";
import LandingInfo from "./components/landingInfo";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LandingInfo />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
