import React,{Component} from "react";



export default class NewsCard extends Component {
    
    render(){
        let { title, description,imageUrl,leranUrl,Author,publishedAt,source} = this.props;
        return(
            <>
                <div className="card m-2" >
                <span className="badge position-absolute top-0  translate-middle text-bg-danger" style={{left: '75%', zIndex: '2'}}>{source?source:'Unkown'}</span>
                    <img src={imageUrl?imageUrl:'https://marketplace.canva.com/EAE-rNnDuBY/1/0/1600w/canva-red-and-white-animated-breaking-news-youtube-intro-5sgiRJFd4hk.jpg'} className="card-img-top" alt="..."/>
                    <div className="card-body"> 
                        <h5 className="card-title">{title.slice(0,33)}{title.length > 33 ? '...': ''}</h5>
                        <p className="card-text">{description.slice(0,100)}{description.length > 100 ? '...': ''}</p>
                        <p className="card-text"><small className="text-body-secondary">Author {!Author ?'Unkonw': Author} publishedAt {new Date(publishedAt).toUTCString()}</small></p>
                        <a href={leranUrl} target="_blank" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </>
        )
    }
} 
NewsCard.defaultProps = {
    title: 'Default Title',
    description: 'This is Default description To style an element with the inline style attribute, the value must be a JavaScript object'
}