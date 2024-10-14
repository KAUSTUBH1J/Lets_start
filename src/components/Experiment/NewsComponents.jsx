import React,{Component} from 'react';
import Card from './NewsCard';
import Loader from '../Template/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class NewsComponents extends Component{
    article = [
      
    ]

    constructor(props){

        super(props);
        this.state ={
            articles: this.article,
            page: 1,
            pageSize : 20,
            loading: true,
            totalResults: 0
        }
        console.log("constructor")
        console.log(this.state)
        document.title = `${this.props.category.toUpperCase().slice(0,1)}${this.props.category.toLowerCase().slice(1)} - ${this.props.Title}`
    }

    updateNews = async ()=>{
        
        console.log('updateNews');
        let page = this.state.page;
        let Url = `https://newsapi.org/v2/top-headlines?country=us&country=${this.props.category}&apiKey=${this.props.ApiKey}&page=${page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        console.log(Url);
        let data = await fetch(Url);
        this.props.setProgressBar(35);
        let parsedata = await data.json();
        console.log(parsedata);
        this.props.setProgressBar(70);
        this.setState ({
            articles: parsedata.articles,
            totalResults : parsedata.totalResults,
            loading: false
        })
        this.props.setProgressBar(100);
       
    }

    handlePreClick = async () =>{
        console.log("previews");
        this.setState ({
            page: this.state.page - 1,
        })
        this.updateNews();
    }

    handleNextClick = async () =>{
        console.log("next")

        if( !(this.state.page +1  > Math.ceil(this.state.totalResults/this.props.pageSize) ) ){

            this.setState (
                (prevState) => ({
                    page: prevState.page + 1,
                }),
                () => {
                    this.updateNews();  // Call updateNews in the callback after the state is updated
                }
            )
            // this.updateNews();
            console.log(this.state);
        }
    }

    fetchMoreData = async () => {
        console.log('fetchMoreData');
        this.setState({ page: this.state.page + 1 })
        console.log(this.state);
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=us&country=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        console.log(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

    async componentDidMount(){
        this.updateNews();
    }


    
    
    render(){
        return(
            
            <>
                <h1 className='text-center my-3'>
                    New's of {this.props.category.toUpperCase().slice(0,1)}{this.props.category.toLowerCase().slice(1)}
                </h1>
                
                {this.state.loading ?<div className='d-flex justify-content-center'><Loader/></div>:''}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={<Loader/>}
                    >
                        <div className='container my-3'  style={{display: 'flex',flexWrap: 'wrap','justifyContent': 'start'}}>
                            <div className="row">
                                {
                                        this.state.articles.map((element)=>{
                                        return  <div className='col-md-4' key={element.url}>
                                            <Card  title={element.title? element.title : ''} Author={element.author} publishedAt={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage?element.urlToImage:''} description={element.description?element.description:''} leranUrl={element.url?element.url:''}/>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </InfiniteScroll>
                    <div className='container m-3'>

                    </div>
                
                {/* <div className='d-flex justify-content-between my-3'>
                    <button type="button" className="btn btn-primary" onClick={this.handlePreClick} disabled={this.state.page<=1}>&larr; Perviews</button>
                    <button type="button" className="btn btn-primary" onClick={this.handleNextClick} disabled={this.state.page +1  > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
                </div> */}
   
            </>
        )
    }
}



