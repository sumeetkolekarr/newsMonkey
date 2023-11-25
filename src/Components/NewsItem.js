import React, { Component } from "react";

export class NewsItem extends Component {
    render()
    {
       let styleDiv = {
           width: '18rem',
       }
       let {title, desc} = this.props;
    return (
      <>
        <div className="card" style={styleDiv}>
          <img src="https://media.wired.com/photos/654a71357d280188fd69f07e/191:100/w_1280,c_limit/OpenAI-GPT4-Updates-Business-1436010616.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
            <a href="/new" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
