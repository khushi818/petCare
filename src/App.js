import './index.css';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
