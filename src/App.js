import logo from './logo.svg';
import Header from './component/Header'
import LoginPage from './component/LoginPage'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  PrivateRoute,
  ProtectedPage,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
