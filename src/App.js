import React, { Component } from "react";
// import NewsItem from "./NewsItem.js";
import Navbar from "./Navbar.js";
import NewsMain from "./NewsMain.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
    console.log(this.state.progress);
  };

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div>
            <LoadingBar
              color="#f11946"
              progress={this.state.progress}
              // onLoaderFinished={() => this.setState({progress:100})}
            />
          </div>
          {/* we use below code give error maximum depth exceeded */}
          {/* <Switch>
            <Route exact path="/" component={() => (<NewsMain setProg={this.setProgress} category="general" />)}/>
            <Route exact path="/business" component={() => (<NewsMain setProg={this.setProgress} category="business" />)}/>
            <Route exact path="/sports" component={() => (<NewsMain setProg={this.setProgress} category="sports" />)}/>
            <Route exact path="/entertainment" component={() => (<NewsMain setProg={this.setProgress} category="entertainment" />)}/>
            <Route exact path="/technology" component={() => (<NewsMain setProg={this.setProgress} category="technology" />)}/>
            <Route exact path="/science" component={() => (<NewsMain setProg={this.setProgress} category="science" />)}/>
            <Route exact path="/health" component={() => (<NewsMain setProg={this.setProgress} category="health" />)}/>
          </Switch> */}

          {/* usage of key- when we render samme componet with different props react cant render same comp again to distinguish key is used */}
           <Switch>
            <Route exact path="/" ><NewsMain setProg={this.setProgress} key="general" category="general" /></Route>
            <Route exact path="/business" ><NewsMain setProg={this.setProgress} key="business" category="business" /></Route>
            <Route exact path="/sports" ><NewsMain setProg={this.setProgress} key="sports" category="sports" /></Route>
            <Route exact path="/entertainment" ><NewsMain setProg={this.setProgress} key="entertainment" category="entertainment" /></Route>
            <Route exact path="/technology" ><NewsMain setProg={this.setProgress} key="technology" category="technology" /></Route>
            <Route exact path="/science" ><NewsMain setProg={this.setProgress} key="science" category="science" /></Route>
            <Route exact path="/health" ><NewsMain setProg={this.setProgress} key="health" category="health" /></Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;


