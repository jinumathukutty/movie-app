import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
