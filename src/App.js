import React from "react";
import Header from "./components/Header/Header";
import AddConsumption from "./components/AddConsumption/AddConsumption";
import Categories from "./components/Categories/Categories";
import ModalWin from "./components/ModalWin";
import History from "./components/History/History";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App mt-4">
      <Header />
      <Route exact path="/">
        <AddConsumption />
        <Categories />
        <ModalWin />
      </Route>
      <Route path="/history">
          <History />
      </Route>
    </div>
  );
}

export default App;
