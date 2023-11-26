import React, { Component } from "react";

export class NewsItem extends Component {
    render()
    {
       let styleDiv = {
           width: '18rem',
       }
       let {title, desc, imageUrl, newsUrl} = this.props;
    return (
      <>
        <div className="card" style={styleDiv}>
          <img src={imageUrl?imageUrl:"pexels-cottonbro-studio-3944454.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}...
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
