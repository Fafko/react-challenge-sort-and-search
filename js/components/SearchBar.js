import React, {Component} from 'react';

export default
class SearchBar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form className="form-group" >
                        <input value={this.props.filterText} onChange={this.props.setFilter} className="form-control" type="text" placeholder="Search people by name..." />
                    </form>
                </div>
            </div>
        );
    }
}
            