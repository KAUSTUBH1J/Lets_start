import React,{Component} from 'react';
import Card from './NewsCard';
import Loader from '../Template/Loader';

export default class NewsComponents extends Component{
    article = [
      {
        "source": {
          "id": null,
          "name": "Iculture.nl"
        },
        "author": "Gonny van der Zwaag | iCulture.nl",
        "title": "Fysieke knoppen maken een comeback, ook bij Apple",
        "description": "De Wall Street Journal ziet een trend opduiken: fabrikanten kiezen weer steeds vaker voor fysieke knoppen in plaats van touchscreens. Als zelfs Apple eraan meedoet, moet er wel wat aan de hand zijn, vindt de krant.\nHet artikel Fysieke knoppen maken een comeba…",
        "url": "https://www.iculture.nl/nieuws/fysieke-knoppen-comeback/",
        "urlToImage": "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1412271/?v=14089571728462203",
        "publishedAt": "2024-10-09T06:23:20Z",
        "content": "De afgelopen twee decennia kozen fabrikanten van consumentenproducten vaak voor een aanraakscherm. Het gebeurde bij auto’s, speakers, inductiekookplaten en e-readers. Fysieke knoppen werden vervangen… [+3725 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Newsonjapan.com"
        },
        "author": null,
        "title": "Honda Unveils Next-Generation EVs",
        "description": "Honda has showcased its next-generation EVs, launching in 2026, featuring smaller batteries and motors which will reduce overall vehicle weight by 100 kilograms. (News On Japan)",
        "url": "https://newsonjapan.com/article/143782.php",
        "urlToImage": "https://newsonjapan.com/images/article/143782t.jpg",
        "publishedAt": "2024-10-09T06:12:51Z",
        "content": "TOKYO, Oct 09 (News On Japan) -\r\n Honda has showcased its next-generation EVs, launching in 2026, featuring smaller batteries and motors which will reduce overall vehicle weight by 100 kilograms.\r\nTh… [+679 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Connie Loizos",
        "title": "The Boring Company's Las Vegas loop is attracting riders, and trespassers | TechCrunch",
        "description": "The Boring Company’s 2.4-mile underground Loop in Las Vegas is proving anything but boring for management, with at least 67 trespassing occurrences since",
        "url": "https://techcrunch.com/2024/10/08/the-boring-companys-las-vegas-loop-is-attracting-riders-and-trespassers/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/boring-loop-GettyImages-1311709587.jpg?resize=1200,770",
        "publishedAt": "2024-10-09T06:01:38Z",
        "content": "The Boring Companys 2.4-mile underground Loop in Las Vegas is proving anything but boring for management, with at least 67 trespassing occurrences since 2022, according to a deep dive by Fortune.  \r\n… [+856 chars]"
      }
    ]

    constructor(props){

        super(props);
        this.state ={
            articles: this.article,
            page: 1,
            pageSize : 20,
            loading: true
        }
        console.log("constructor")
        console.log(this.state)
        document.title = `${this.props.category.toUpperCase().slice(0,1)}${this.props.category.toLowerCase().slice(1)} - ${this.props.Title}`
    }

    updateNews = async ()=>{
        let page = this.state.page;
        let Url = `https://newsapi.org/v2/top-headlines?country=us&country=${this.props.category}&apiKey=5025f98abfe448428f9c301fb31a9a02&page=${page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        console.log(Url);
        let data = await fetch(Url);
        let parsedata = await data.json();
        console.log(parsedata);
        this.setState ({
            articles: parsedata.articles,
            totalResults : parsedata.totalResults,
            loading: false
        })
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

    async componentDidMount(){

        this.updateNews();

    }
    
    render(){
        return(
            
            <>
                <div className='container my-3'>
                    <h1>
                        New's of {this.props.category.toUpperCase().slice(0,1)}{this.props.category.toLowerCase().slice(1)}
                    </h1>
                    {this.state.loading ?<div className='d-flex justify-content-center'><Loader/></div>:''}
                    <div style={{display: 'flex',flexWrap: 'wrap','justifyContent': 'start'}}>
                        {
                            this.state.loading ? '' : this.state.articles.map((element)=>{
                                return  <div className='col-md-4'>
                                    <Card  title={element.title? element.title : ''} Author={element.author} publishedAt={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage?element.urlToImage:''} description={element.description?element.description:''} leranUrl={element.url?element.url:''}/>
                                </div>
                            })
                        }
                        
                    </div>
                    <div className='d-flex justify-content-between my-3'>
                        <button type="button" className="btn btn-primary" onClick={this.handlePreClick} disabled={this.state.page<=1}>&larr; Perviews</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleNextClick} disabled={this.state.page +1  > Math.ceil(this.state.totalResults/this.props.pageSize)}>Next &rarr;</button>
                    </div>
                </div>
            </>
        )
    }
}



