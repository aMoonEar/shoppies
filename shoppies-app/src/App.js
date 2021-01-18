import "./App.css";
import LandingInfo from "./components/landingInfo";
import Search from "./components/searchBar";
import { ToastProvider, useToasts } from "react-toast-notifications";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        {/* <NavigationBar /> */}
        <LandingInfo />
        <Search />
      </div>
    </ToastProvider>
  );
}

export default App;
