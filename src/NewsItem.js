import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let {title,content,url,imgUrl}=this.props
    return (
      <>
      <div className="col-md-4" >
        <div className="card my-3" >
          <img src={imgUrl?imgUrl:"https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 className="card-title">{title.length>45?title.slice(0,45)+" . . .":title}</h5>
            <p className="card-text">
              {content ? content.length>88?content.slice(0,88)+" . . .":content:'Press "Read More" to read article'}
            </p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
      </>
    );
  }
}


export default NewsItem;
