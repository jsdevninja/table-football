import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Core from "./views/Core";
import configureStore from "./store";

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Router>
      <Core />
    </Router>
  </Provider>
);

export default App;
