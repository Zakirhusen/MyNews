import React, { Component, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import JsonData from "./JsonData.js";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const NewsMain =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  NewsMain.defaultProps = {
    country: "in",
    pageSize: 7,
    category: "general",
  };
  NewsMain.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  
const update = async () => {
    console.log(props.category)
    props.setProg(5)
    let newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b6e56aa9ad54372a1d51b92c41e1e45&page=${page}&pageSize=${props.pageSize}`;
    console.log(newsUrl)
    props.setProg(40)
    setLoading({ loading: true });
    let data = await fetch(newsUrl);
    props.setProg(30)
    let parsedData = await data.json();
    props.setProg(70)
    // console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProg(100)
    // console.log(this.state);
  };
useEffect(() => {
  update();
}, [])


    
    const fetchMoreData = async () => {
      setPage(page + 1 );
      // console.log(page);
      // api key 3b6e56aa9ad54372a1d51b92c41e1e45,f2388b79ca5345819ff601e4b1ac42e8
      let newsUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3b6e56aa9ad54372a1d51b92c41e1e45&page=${page+1}&pageSize=${props.pageSize}`;
      console.log(newsUrl)
      setLoading(true);
      let data = await fetch(newsUrl);
      let parsedData = await data.json();
      console.log("parsedData in fetchMore func", parsedData);
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false);
      
    };
    return (
      <>
        <div className="container  my-3">
        <div className="d-flex justify-content-between  mt-5 pt-3">
          <h2 className=" ">My news</h2>
            <h4 className=" mx-3 my-0  text-capitalize d-flex align-items-center"> Top Headlines -&nbsp; {props.category}</h4>
        </div>
          <hr />
          {loading && <Spinner />}
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner className='my-5' />}
            >
          <div className="d-flex row">

            {/* below code is for next and previous button */}
            {/* {!loading && */}
            {articles.map((currElem, index) => {
              /* console.log(currElem) */
              return (
                <NewsItem
                  key={currElem.url}
                  title={currElem.title}
                  content={currElem.description}
                  url={currElem.url}
                  imgUrl={currElem.urlToImage}
                  publishedAt={currElem.publishedAt}
                  author={currElem.author}
                  source={currElem.source}
                  category={props.category}
                />
              );
            })}
          </div>
            </InfiniteScroll>

        </div>
      </>
    );
  
}
NewsMain.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "science",
};

export default NewsMain;





// ################################## CLASS BASED COMP ##############################
// class NewsMain extends Component {
//   static defaultProps = {
//     country: "in",
//     pageSize: 7,
//     category: "general",
//   };
//   static propTypes = {
//     country: PropTypes.string,
//     category: PropTypes.string,
//     pageSize: PropTypes.number,
//   };
//   constructor(props) {
//     super(props);
//     // console.log("I am constructor");
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//       totalResults: 0,
//     };
//   }
//   update = async () => {
//     console.log(this.props.category)
//     this.props.setProg(5)
//     let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6e56aa9ad54372a1d51b92c41e1e45&page=${page}&pageSize=${this.props.pageSize}`;
//     console.log(newsUrl)
//     this.props.setProg(40)
//     this.setState({ loading: true });
//     let data = await fetch(newsUrl);
//     this.props.setProg(30)
//     let parsedData = await data.json();
//     this.props.setProg(70)
//     // console.log(parsedData);
//     this.setState({
//       articles: parsedData.articles,
//       totalResults: parsedData.totalResults,
//       loading: false,
//     });
//     this.props.setProg(100)
//     // console.log(this.state);
//   };

//   async componentDidMount() {
//     console.log("cmd");
//     this.update();

//   }

//   render() {
//     const {pageSize} = this.props;
//     const prevHandler = async () => {
//       // console.log("prev button is clicked ");
//       this.update();
//     };
//     const nextHandler = async () => {
//       // console.log("next button is clicked ");
//       // console.log(page + 1,this.state.totalResults / this.props.pageSize);
//       if (this.state.page + 1 > Math.ceil(this.state.totalResults / pageSize)) {
//       } else {
//         this.setState({ page: this.state.page + 1 });
//         setTimeout(() => {
//           this.update();
//         }, 0);
//       }
//     };
//     const fetchMoreData = async () => {
//       this.setState({ page: this.state.page + 1 });
//       console.log(this.state.page);
//       // api key 3b6e56aa9ad54372a1d51b92c41e1e45,f2388b79ca5345819ff601e4b1ac42e8
//       let newsUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3b6e56aa9ad54372a1d51b92c41e1e45&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//       console.log(newsUrl)
//       this.setState({ loading: true });
//       let data = await fetch(newsUrl);
//       let parsedData = await data.json();
//       console.log("parsedData in fetchMore func", parsedData);
//       this.setState({
//         articles: this.state.articles.concat(parsedData.articles),
//         totalResults: parsedData.totalResults,
//         loading: false,
//       });
//     };
//     return (
//       <>
//         <div className="container  my-3">
//         <div className="d-flex justify-content-between  mt-5 pt-3">
//           <h2 className=" ">My news</h2>
//             <h4 className=" mx-3 my-0  text-capitalize d-flex align-items-center"> Top Headlines -&nbsp; {this.props.category}</h4>
//         </div>
//           <hr />
//           {this.state.loading && <Spinner />}
//             <InfiniteScroll
//               dataLength={this.state.articles.length}
//               next={fetchMoreData}
//               hasMore={this.state.articles.length !== this.state.totalResults}
//               loader={<Spinner className='my-5' />}
//             >
//           <div className="d-flex row">

//             {/* below code is for next and previous button */}
//             {/* {!this.state.loading && */}
//             {this.state.articles.map((currElem, index) => {
//               /* console.log(currElem) */
//               return (
//                 <NewsItem
//                   key={currElem.url}
//                   title={currElem.title}
//                   content={currElem.description}
//                   url={currElem.url}
//                   imgUrl={currElem.urlToImage}
//                   publishedAt={currElem.publishedAt}
//                   author={currElem.author}
//                   source={currElem.source}
//                   category={this.props.category}
//                 />
//               );
//             })}
//           </div>
//             </InfiniteScroll>

//             {/* prev and next button  */}

//           {/* <div className="d-flex  container my-2 justify-content-between ">
//             <button
//               className="btn btn-danger"
//               onClick={prevHandler}
//               disabled={this.state.page <= 1}
//             >
//               &larr; prev
//             </button>
//             <button
//               className="btn btn-danger"
//               disabled={
//                 this.state.page + 1 >
//                 Math.ceil(this.state.totalResults / this.props.pageSize)
//               }
//               onClick={nextHandler}
//             >
//               next &rarr;
//             </button>
//           </div> */}
//         </div>
//       </>
//     );
//   }
// }
// NewsMain.defaultProps = {
//   country: "in",
//   pageSize: 6,
//   category: "science",
// };

// export default NewsMain;
