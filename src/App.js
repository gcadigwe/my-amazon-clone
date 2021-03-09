import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      {/* header */}

      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/checkout" exact>
          <Header />
          <Checkout />
        </Route>
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
