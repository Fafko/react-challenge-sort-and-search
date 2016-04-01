import React, {Component} from 'react';

export default 
class UserData extends Component{
    
    render(){
        return (
            <tr>
                <td><img src={`images/${this.props.user.image}.svg`} className="user-image"/></td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>{`8 ${this.props.user.phone}`}</td>
            </tr>
        );
    }
    
}
    
  
        
