import './index.css';
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import CreatePost from './components/CreatePost/CreatePost';
import Chat from './components/Chat/Chat'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/signup" element = {<SignUp/>}/>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/createpost" element = {<CreatePost/>}/>
      <Route path = "/chat" element = {<Chat/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
