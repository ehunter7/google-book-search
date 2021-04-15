import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </div>
    </Router>
  );
}

export default App;
