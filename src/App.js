import './App.css';
import NavBar from './Components/Navigation/NavBar';
import Overview from './Components/Overview/Overview';
import InsertData from './Components/InsertData/InsertData'

import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" component={Overview} />
          <Route path="/InsertData" component={InsertData} />
          {/* <Route path="/Targets" component={Targets} />
          <Route path="/Logout" component={Logout} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
