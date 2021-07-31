import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar/>
       <Switch>
       <Route path="/" exact component={Home} />
        {/* <Route path="/cart" component={Signup} /> */}
       </Switch>
    </div>
  );
}
export default App;

