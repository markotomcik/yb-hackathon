import ChatRoom from "./components/ChatRoom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/ChatRoom">
          <ChatRoom />
          {/* <ChatRoom chatHistory={chatHistory} /> */}
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
