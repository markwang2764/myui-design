import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";

import Routes from "./routes";
import store from "./store";
@hot
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
