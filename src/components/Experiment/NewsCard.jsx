import React,{Component} from "react";



export default class NewsCard extends Component {
    
    render(){
        let { title, description,imageUrl,leranUrl} = this.props;
        return(
            <>
                <div className="card m-2" >
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body"> 
                        <h5 className="card-title">{title.slice(0,33)}{title.length > 33 ? '...': ''}</h5>
                        <p className="card-text">{description.slice(0,100)}{description.length > 100 ? '...': ''}</p>
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