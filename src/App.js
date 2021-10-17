import React, { Component } from "react";
// import NewsItem from "./NewsItem.js";
import Navbar from "./Navbar.js";
import NewsMain from "./NewsMain.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  
   state={
      progress:0
    }
    setProgress=(progress) => {
      this.setState({progress:progress})
      console.log(this.state.progress)
    }

  render() {
    return (
      <>
        <Router>
          <Navbar />
        <div>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => this.setState({progress:100})}
      />
      {/* <button onClick={() => setProgress(this.state.progress + 10)}>Add 10%</button>
      <button onClick={() => setProgress(this.state.progress + 20)}>Add 20%</button>
      <button onClick={() => setProgress(100)}  >Complete</button>
      <br /> */}
    </div>
          <Switch >
          <Route exact  path='/' ><NewsMain setProg={this.setProgress} category='general' /></Route>
          <Route exact  path='/business'> <NewsMain setProg={this.setProgress} category='business' /></Route>
          <Route exact  path='/sports'> <NewsMain setProg={this.setProgress} category='sports' /></Route>
          <Route exact  path='/entertainment'> <NewsMain setProg={this.setProgress} category='entertainment'/></Route>
          <Route exact  path='/technology'> <NewsMain setProg={this.setProgress} category='technology' /></Route>
          <Route exact  path='/science'> <NewsMain setProg={this.setProgress} category='science' /></Route>
          <Route exact  path='/health'> <NewsMain setProg={this.setProgress} category='health' /></Route>
          
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
