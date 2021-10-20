import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>

          <Route path="/">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
