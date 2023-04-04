// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
        <Navbar/>
        <div className="container">
        <Routes>          
        <Route exact path="/general"element={<News key="general" country='in'category='general'/>}></Route>
        <Route exact path="/business"element={<News key="business" country='in'category='business'/>}></Route>
        <Route exact path="/entertainment"element={<News key="entertainment" country='in'category='entertainment'/>}></Route>
        <Route exact path="/health"element={<News key="health" country='in'category='health'/>}></Route>
        <Route exact path="/science"element={<News key="science" country='in'category='science'/>}></Route>
        <Route exact path="/sports"element={<News key="" country='in'category='sports'/>}></Route>
        <Route exact path="/technology"element={<News key="technology" country='in'category='technology'/>}></Route>
        </Routes>
        </div>
        </Router> 
      </div>
    )
  }
}

export default App
