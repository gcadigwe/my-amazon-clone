import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
