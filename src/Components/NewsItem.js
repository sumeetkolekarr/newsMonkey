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
          <img src={imageUrl?imageUrl:'https://media.wired.com/photos/64dfaf4420abe9537824fa2f/master/w_1920,c_limit/081823-big-tech-trust-safety-staff.jpg'} className="card-img-top" alt="..." />
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
