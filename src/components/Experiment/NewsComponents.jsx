import React,{Component} from 'react';
import Card from './NewsCard';

export default class NewsComponents extends Component{
    render(){
        return(
            <>
                <div className='container'>
                    <h1>
                        Today New's 
                    </h1>
                    <div style={{display: 'flex'}}>
                        <Card title="abs"/>
                    </div>
                </div>
            </>
        )
    }
}



