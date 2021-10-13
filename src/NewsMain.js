import React, { Component } from "react";
import NewsItem from "./NewsItem";
import JsonData from "./JsonData.js";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

class NewsMain extends Component {
  static defaultProps={
    country:'in',
    pageSize:6,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string,
    pageSize:PropTypes.number
  }
  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("cmd");
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2388b79ca5345819ff601e4b1ac42e8&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(newsUrl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults:parsedData.totalResults});
    console.log(this.state)
  }

  render() {
    
    const{pageSize}=this.props;
    
    const prevHandler = async () => {
      console.log("prev button is clicked ");
      let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2388b79ca5345819ff601e4b1ac42e8&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(newsUrl);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
      console.log(this.state);
    };
    const nextHandler = async () => {
      console.log("next button is clicked ");
      console.log(this.state.page+1,this.state.totalResults/this.props.pageSize)
      if (this.state.page+1>Math.ceil((this.state.totalResults)/this.props.pageSize)) {
        
      } else { 
        let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f2388b79ca5345819ff601e4b1ac42e8&page=${
          this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        // console.log(this.state);
        let data = await fetch(newsUrl);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: parsedData.articles,
          page: this.state.page + 1,
          loading: false,
        });
        console.log(this.state);
      }
      };
    return (
      <>
        <div className="container  my-3">
          <h2>My news</h2>
          <hr />
          {this.state.loading && <Spinner />}
          <div className="d-flex row">
            {!this.state.loading &&
              this.state.articles.map((currElem) => {
                /* console.log(currElem) */
                return (
                  <NewsItem
                    key={currElem.url}
                    title={currElem.title}
                    content={currElem.description}
                    url={currElem.url}
                    imgUrl={currElem.urlToImage}
                  />
                );
              })}
          </div>
          <div className="d-flex  container my-2 justify-content-between ">
            <button
              className="btn btn-danger"
              onClick={prevHandler}
              disabled={this.state.page <=1}
            >
              &larr; prev
            </button>
            <button className="btn btn-danger" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={nextHandler}>
              next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
// NewsMain.defaultProps={
//   country:'in',
//   pageSize:6
// }

export default NewsMain;
