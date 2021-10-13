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
          <Route exact path='/' component={()=><NewsMain catergory='general' />}/>
          <Route exact path='/business' component={()=><NewsMain catergory='business' />}/>
          <Route exact path='/sports' component={()=><NewsMain catergory='sports' />}/>
          <Route exact path='/entertainment' component={()=><NewsMain catergory='entertainment' />}/>
          <Route exact path='/technology' component={()=><NewsMain catergory='technology' />}/>
          <Route exact path='/science' component={()=><NewsMain catergory='science' />}/>
          <Route exact path='/health' component={()=><NewsMain catergory='health' />}/>
          
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
