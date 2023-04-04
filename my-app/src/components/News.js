import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
static defaultProps = {
  country:'in',
  pagesize:6,
  category:'general'
}
static propTypes = {
country: PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string
}
 constructor(){
  super();
  this.state={
    articles:[],
    loading:true,
    page:1,
    pagesize:6
  }
  // document.title=`News App : ${this.props.category}`
 }
 
 async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bccba79c2f4a4accb8a7f88f4bd9dcfc&pagesize=6&page=1`;
  this.setState({loading:true})
  let data=await fetch(url);
  let parseddata=await data.json();
  // console.log(parseddata);
  this.setState({articles:parseddata.articles,totalResults:parseddata.totalResults,loading:false})
 }
handleprev = async()=>{
// console.log("previous");
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bccba79c2f4a4accb8a7f88f4bd9dcfc&pagesize=6&page=${this.state.page-1}`;
this.setState({loading:true})
let data=await fetch(url);
  let parseddata=await data.json();
  this.setState({page:this.state.page - 1 , articles:parseddata.articles,loading:false});
}
handlenext = async()=>{
// console.log("next");

let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bccba79c2f4a4accb8a7f88f4bd9dcfc&pagesize=6&page=${this.state.page+1}`;
this.setState({loading:true})
let data=await fetch(url);
  let parseddata=await data.json();
  this.setState({page:this.state.page + 1 , articles:parseddata.articles,loading:false});
}
  render() {
    return (
      <div>
     <div className='row'>
      <div className='text-center'>
      <h2 className="mt-2"><strong>News-Monkey : Top {this.props.category} Headline</strong></h2>
      {this.state.loading && <Spinner/>}
      </div>
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className='col-md-4 my-3' key={element.url}>
        <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://images.axios.com/5AzjMRn_CwT1ZrpLe-4O7z8NPys=/0x606:5892x3920/1366x768/2023/02/18/1676741999333.jpg"} newsUrl={element.url} publishedAt={element.publishedAt?element.publishedAt:"few days ago"} author={element.author?element.author:"unknown"}/>
      </div>
      })}
      </div>
      <div className="d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark"  onClick={this.handleprev}>&larr; previous</button>
      <button disabled={this.state.page>=(Math.ceil(this.state.totalResults/this.state.pagesize))}type="button" className="btn btn-dark" onClick={this.handlenext}>next &rarr;</button>
      
      </div>
     </div>
    )
  }
}

export default News
