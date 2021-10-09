import ChatRoom from "./components/ChatRoom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/ChatRoom">
          <ChatRoom />
          {/* <ChatRoom chatHistory={chatHistory} /> */}
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
