import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
   let {title, description, imageUrl,newsUrl,publishedAt,author}=this.props;
    return (
      <div >
        <div className="card" style={{width : "18rem"}}>
        {/* <span class="badge rounded-pill text-bg-primary">Primary</span> */}
         <img src={imageUrl}style={{height:"150px",width:"100%"}} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{title}...</h5>
           <p className="card-text">{description}...</p>
           <p className="card-text"><small style={{color:"red"}}>Published by: {author} </small></p>
           <p className="card-text"><small style={{color:"red"}}>Published on: {publishedAt}</small></p>
           <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-primary">Read more...</a>
         </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
