import './App.css';
import {BrowserRouter as Router, Route,Switch, Link} from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Mac from "./components/mac/Mac"
import Ipad from "./components/ipad/Ipad"
import Iphone from "./components/iphone/Iphone"
import Watch from "./components/watch/Watch"
import Airpod from "./components/airpods/Pod"
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
        <Switch>
          <Route exact path="/" component={Mac}/>
          <Route path="/ipad" component={Ipad}  />
          <Route path="/iphone" component={Iphone}  />
          <Route path="/watch" component={Watch}  />
          <Route path="/airpod" component={Airpod}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
