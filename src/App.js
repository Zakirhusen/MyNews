import React, { Component } from "react";
// import NewsItem from "./NewsItem.js";
import Navbar from "./Navbar.js";
import NewsMain from "./NewsMain.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  // constructor(){
  //     super()
  // }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
          <Route exact  path='/' component={()=><NewsMain category='general' />}/>
          <Route exact  path='/business' component={()=><NewsMain category='business' />}/>
          <Route exact  path='/sports' component={()=><NewsMain category='sports' />}/>
          <Route exact  path='/entertainment' component={()=><NewsMain category='entertainment' />}/>
          <Route exact  path='/technology' component={()=><NewsMain category='technology' />}/>
          <Route exact  path='/science' component={()=><NewsMain category='science' />}/>
          <Route exact  path='/health' component={()=><NewsMain category='health' />}/>
          
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
