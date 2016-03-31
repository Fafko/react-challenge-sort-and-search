import React, {Component} from 'react';

export default
class ToolBar extends Component{
    
    render() {
        
        let mode = this.props.filterMode;
        let by = this.props.filterBy;
        
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="buttons_bar">
                        <button className="btn btn-default" onClick={ () => this.props.setFilterMode('name')} >
                            <i className={"icon fa fa-sort-alpha-"+ (by === 'name' ? mode : 'asc')}></i> Sort by name
                        </button>
                        <button className="btn btn-default" onClick={ () => this.props.setFilterMode('age')}>
                            <i className={'icon fa fa-sort-numeric-' + (by === 'age' ? mode : 'asc')}></i> Sort by age
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}