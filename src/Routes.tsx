// src/Routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import MenuItemPage from "./pages/MenuItemPage";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route path="/menu/:id" component={MenuItemPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
