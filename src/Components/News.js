import React, { Component } from "react";
import "./News.css";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    console.log("News Fetched")
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    console.log('cdm');
    let url = "https://newsapi.org/v2/everything?q=technology&apiKey=3fe6add079644128955ec5769c77c8e0";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <>
      <div className="new">
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3 d-flex justify-content-center mb-3" key={element.url}>
              <NewsItem title={element.title} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
            </div>
          })}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default News;
