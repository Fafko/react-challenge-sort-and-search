import React, {Component} from 'react';

export default
class ActiveUser extends Component{
    
    render(){
        
        let user = this.props.user;
        
        if(!user){
            return (
                <div className='col-sm-4 col-md-3 col-lg-2' >
                    <h3>Nothing found :(</h3>
                </div>
            )
        }
        
        return (
            <div className='col-sm-4 col-md-3 col-lg-2' >
                <div className="thumbnail">
                    <img src={`images/${user.image}.svg`}/>
                    <div className="thumbnail-caption">
                        <h3>{this.props.user.name}</h3>
                        <table className="user-info table table-responsive">
                            <tbody>
                                <tr>
                                    <td>Age:</td>
                                    <td>{user.age}</td>
                                </tr>
                                <tr>
                                    <td>Favorite animal:</td>
                                    <td>{user.image}</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>{`8 ${user.phone}`}</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><b>Favorite phrase:</b> {user.phrase}</p>
                    </div>
                </div>
            </div>
        );
    }
    
}