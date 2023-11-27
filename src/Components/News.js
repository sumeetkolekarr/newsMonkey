import React, { Component } from "react";
import "./News.css";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    console.log("News Fetched")
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount(){
    console.log('cdm');
    let url = "https://newsapi.org/v2/everything?q=technology&apiKey=3fe6add079644128955ec5769c77c8e0&page=1&pageSize=2000";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalArticles: parsedData.totalResults})
  }

 handleNextClick = async ()=>{
    console.log("next clicked");
    if (this.state.page+1>Math.ceil(this.state.totalResults/20)) {
      
    }
    else{
      let url = `https://newsapi.org/v2/everything?q=technology&apiKey=3fe6add079644128955ec5769c77c8e0&page=${this.state.page + 1}&pageSize=2000`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
    }
  }

 handlePrevClick = async ()=>{
    console.log("prev clicked");
    let url = `https://newsapi.org/v2/everything?q=technology&apiKey=3fe6add079644128955ec5769c77c8e0&page=${this.state.page - 1}&pageSize=2000`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

  }

  render() {
    return (
      <>
      <div className="new">
        <div className="container my-3 bg-light">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-3 d-flex justify-content-center mb-3" key={element.url}>
              <NewsItem title={element.title} desc={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
            </div>
          })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} class="btn btn-dark mb-2" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" class="btn btn-dark mb-2" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      </>
    );
  }
}

export default News;
