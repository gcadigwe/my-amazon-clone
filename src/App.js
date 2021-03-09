import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import Payment from "./components/Payment/Payment";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER IS >>>", authUser);

      if (authUser) {
        //just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      {/* header */}

      <Switch>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
        <Route path="/payment" exact>
          <Header />
          <Payment />
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
