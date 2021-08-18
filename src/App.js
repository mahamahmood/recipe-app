import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Recipes from './components/Recipes/Recipes';
import CreateRecipe from './components/Recipes/CreateRecipe';
import Home from './components/Home';

function App() {
  // Routes
  const routes = [
    {
      path: "/recipes",
      component: Recipes,
      key: "recipes",
    },
    {
      path: "/create-recipe",
      component: CreateRecipe,
      key: "create",
    },
    {
      path: "/",
      exact: true,
      component: Home,
      key: "default"
    }
  ];
  return (
    <BrowserRouter>
      {routes.map((route) => {
        return (
          <Route
            component={route.component}
            path={route.path}
            key={route.key}
            exact={route.exact}
          />
        );
      })}
    </BrowserRouter>
  );
}

export default App;
