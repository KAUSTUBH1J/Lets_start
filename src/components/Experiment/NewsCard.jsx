import React,{Component} from "react";

// export default function NewsCard(props){
//     return(
//         <>
//             <div class="card m-2" style={{width: '18rem'}}>
//                 <img src="..." class="card-img-top" alt="..."/>
//                 <div class="card-body"> 
//                     <h5 class="card-title">{props.title}</h5>
//                     <p class="card-text">{props.description}</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </>
//     )
// }

export default class NewsCard extends Component {
    constructor(){
        super();
    }
    render(){
        let { title, description} = this.props;
        return(
            <>
                <div class="card m-2" style={{width: '18rem'}}>
                    <img src="..." class="card-img-top" alt="..."/>
                    <div class="card-body"> 
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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