import React, {Component} from 'react';

export default
class Preloader extends Component{
    
    render(){
        return (
            <div className="spinner">
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <div className="cube"></div>
                <span className="spinner-text">Loading...</span>
            </div>
        )
    }
    
}