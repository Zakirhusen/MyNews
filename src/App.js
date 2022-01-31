import React, { useState } from "react";
// import NewsItem from "./NewsItem.js";
import Navbar from "./Navbar.js";
import NewsMain from "./NewsMain.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const setProgresses = (prog) => {
    setProgress(prog);
    console.log(progress);
  };
  // let apiKey = process.env.REACT_APP_NEWS_API;
  // console.log("Api Key is "+apiKey);
  let apiKey = "3b6e56aa9ad54372a1d51b92c41e1e45";

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <LoadingBar
            color="#f11946"
            progress={progress}
            // onLoaderFinished={() => this.setState({progress:100})}
          />
        </div>
        {/* we use below code give error maximum depth exceeded */}
        {/* <Switch>
        <Route exact path="/" component={() => (<NewsMain setProg={this.setProgresses} category="general" />)}/>
        <Route exact path="/business" component={() => (<NewsMain setProg={this.setProgresses} category="business" />)}/>
        <Route exact path="/sports" component={() => (<NewsMain setProg={this.setProgresses} category="sports" />)}/>
        <Route exact path="/entertainment" component={() => (<NewsMain setProg={this.setProgresses} category="entertainment" />)}/>
        <Route exact path="/technology" component={() => (<NewsMain setProg={this.setProgresses} category="technology" />)}/>
        <Route exact path="/science" component={() => (<NewsMain setProg={this.setProgresses} category="science" />)}/>
        <Route exact path="/health" component={() => (<NewsMain setProg={this.setProgresses} category="health" />)}/>
      </Switch> */}

        {/* usage of key- when we render samme componet with different props react cant render same comp again to distinguish key is used */}
        <Switch>
          <Route exact path="/">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="general"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="business"
              category="business"
            />
          </Route>
          <Route exact path="/sports">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="sports"
              category="sports"
            />
          </Route>
          <Route exact path="/entertainment">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="entertainment"
              category="entertainment"
            />
          </Route>
          <Route exact path="/technology">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="technology"
              category="technology"
            />
          </Route>
          <Route exact path="/science">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="science"
              category="science"
            />
          </Route>
          <Route exact path="/health">
            <NewsMain
              setProg={setProgresses}
              apiKey={apiKey}
              key="health"
              category="health"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
