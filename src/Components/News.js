import React, { Component } from "react";
import "./News.css";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
      <div className="new">
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
            <div className="col-md-3">
              <NewsItem title="myTitle" desc="myDesc" />
            </div>
            <div className="col-md-3">
              <NewsItem title="myTitle" desc="myDesc" />
            </div>
            <div className="col-md-3">
              <NewsItem title="myTitle" desc="myDesc" />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default News;
