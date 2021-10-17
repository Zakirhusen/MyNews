import React, { Component } from "react";

class NewsItem extends Component {
  render() {
    let { title, content, url, imgUrl, author, publishedAt,source,category} = this.props;
    const colorForCategory=(category) => {
      if (category==="sports") {
        return 'danger'
      } else if (category==="business") {
        return 'info'
      
      } else if (category==="entertainment") {
        return 'primary'
      
      } else if (category==="health") {
        return 'success'
      
      } else if (category==="general") {
        return 'secondary'
      }else{
        return 'warning'
      }
    }
    return (
      <>
        <div className="col-md-4">
          <div className="card my-3">
          <span className={`position-absolute top-0 end-0 translate-end-x badge rounded-pill bg-${colorForCategory(category)}`}>
            {source.name}<span className="visually-hidden">unread messages</span>
          </span>
            <img
              src={
                imgUrl
                  ? imgUrl
                  : "https://static9.depositphotos.com/1011646/1236/i/600/depositphotos_12369509-stock-photo-breaking-news-screen.jpg"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                {title.length > 45 ? title.slice(0, 45) + " . . ." : title}
              </h5>
              <p className="card-text">
                {content
                  ? content.length > 88
                    ? content.slice(0, 88) + " . . ."
                    : content
                  : 'Press "Read More" to read article'}
              </p>

              <p className="card-text">
                <small>
                  By {author ? author : "Unkown"}
                  {"   "}
                  {new Date(publishedAt).toGMTString()}
                </small>
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

