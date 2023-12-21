import React, { Component } from "react";
import "./News.css";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    console.log("News Fetched");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=90893cd3bc2d4290b4161ee365c5ea34&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false
    });
  }

  handleNextClick = async () => {
    console.log("next clicked");
    if (
      !(this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize))
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=90893cd3bc2d4290b4161ee365c5ea34&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  };

  // 90893cd3bc2d4290b4161ee365c5ea34
  // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3fe6add079644128955ec5769c77c8e0

  handlePrevClick = async () => {
    console.log("prev clicked");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=90893cd3bc2d4290b4161ee365c5ea34&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  };

  render() {
    return (
      <>
        <div className="mt-5">
          {this.state.loading && <Spinner />}
        </div>
        <div className="new mt-10">
          <div className="container my-3 bg-light">
            <h2 className="text-center">NewsMonkey - Top Headlines</h2>
            <div className="row">
              {!this.state.loading && this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-3 d-flex justify-content-center mb-3"
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title}
                      desc={element.description ? element.description : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              disabled={this.state.page <= 1}
              class="btn btn-dark mb-2"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              class="btn btn-dark mb-2"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
