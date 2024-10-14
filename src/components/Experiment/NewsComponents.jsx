import React,{useEffect,  useState} from 'react';
import Card from './NewsCard';
import Loader from '../Template/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsComponents = (props) =>{

    const [articals, setArticals]           = useState([]);
    const [page, setPage]                   = useState(1);
    const [loading, setLoading]             = useState(true);
    const [totalResults, setTotalResult]    = useState(0);
    // document.title = `${props.category.toUpperCase().slice(0,1)}${props.category.toLowerCase().slice(1)} - ${props.Title}`


    const updateNews = async ()=>{
        
        console.log('updateNews');
        let Url = `https://newsapi.org/v2/top-headlines?country=us&country=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        console.log(Url);
        let data = await fetch(Url);
        props.setProgressBar(35);
        let parsedata = await data.json();
        console.log(parsedata);
        props.setProgressBar(70);

        setArticals(parsedata.articles);
        setTotalResult(parsedata.totalResults);
        setLoading(false);

        
        props.setProgressBar(100);
       
    }

    const handlePreClick = async () =>{
        console.log("previews");
        setPage (page - 1);
        updateNews();
    }

    const handleNextClick = async () =>{
        console.log("next")

        if( !(page +1  > Math.ceil(totalResults/props.pageSize) ) ){

            setPage(page + 1);
            updateNews();  // Call updateNews in the callback after the state is updated
                
        }
    }

    const fetchMoreData = async () => {
        console.log('fetchMoreData');
        setPage(page + 1)
        console.log(this.state);
        // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${page}&pageSize=${props.pageSize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=us&country=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        console.log(url);
        let parsedData = await data.json()
        console.log(parsedData);

        setArticals(articals.concat(parsedData.articles));
        setTotalResult(parsedData.totalResults);
        setLoading(false);
    };
    

    
    useEffect(() => {
        updateNews();
    }, [])
    

    
    
    
    return(
        
        <>
            <h1 className='text-center my-3'>
                New's of {props.category.toUpperCase().slice(0,1)}{props.category.toLowerCase().slice(1)}
            </h1>
            
            {loading ?<div className='d-flex justify-content-center'><Loader/></div>:''}
                <InfiniteScroll
                    dataLength={articals.length}
                    next={fetchMoreData}
                    hasMore={articals.length < totalResults}
                    loader={<Loader/>}
                >
                    <div className='container my-3'  style={{display: 'flex',flexWrap: 'wrap','justifyContent': 'start'}}>
                        <div className="row">
                            {
                                    articals.map((element,key)=>{
                                    return  <div className='col-md-4' key={key}>
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
                <button type="button" className="btn btn-primary" onClick={this.handlePreClick} disabled={page<=1}>&larr; Perviews</button>
                <button type="button" className="btn btn-primary" onClick={this.handleNextClick} disabled={page +1  > Math.ceil(totalResults/props.pageSize)}>Next &rarr;</button>
            </div> */}

        </>
    )

}



export default NewsComponents;