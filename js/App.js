import React, { Component } from 'react';

import SearchBar    from './components/SearchBar';
import ToolBar      from './components/ToolBar';
import UserList     from './components/UserList';
import ActiveUser   from './components/ActiveUser';

export default
class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterMode: '',
            filterBy: ''
        };
    }
    
    setFilterString(event) {
        this.setState({
            filterText: event.target.value
        })
    }
    
    setFilterMode(prop){
        if(this.state.filterBy === prop){
            this.setState({
                filterMode: this.state.filterMode === 'asc' ? 'desc' : 'asc'
            })
        }else{
            this.setState({
                filterMode: 'asc',
                filterBy: prop
            })
        }
    }
    
    filterUsers(){
        let users = this.props.appData;
        
        if(this.state.filterText.length){
            users = users.filter((user) => {
                return user.name.indexOf(this.state.filterText) > -1;
            });
        }
        
        if(this.state.filterBy.length || this.state.filterMode.length){
            users.sort((a, b) => {
                if(a[this.state.filterBy] < b[this.state.filterBy]){
                    return this.state.filterMode === 'asc' ? -1 : 1;
                }
                if(a[this.state.filterBy] > b[this.state.filterBy]){
                    return this.state.filterMode === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        
        return users;
    }
    
    render() {
        
        let users = this.filterUsers();
        
        return (
            <div className="container-fluid app">
                <SearchBar filterText={this.state.filterText} setFilterString={this.setFilterString.bind(this)} />
                <ToolBar filterBy={this.state.filterBy} filterMode={this.state.filterMode} setFilterMode={this.setFilterMode.bind(this)} />
                <div className="row">
                    <ActiveUser user={users[0]} />
                    <UserList users={ users } />
                </div>
            </div>
        );
    }
}
