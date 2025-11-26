import { Component } from 'react';
import './search-panel.scss'

class SearchPanel extends Component {

    onUpdateSearch = (e) => {
        this.props.onSearch(e.target.value);
    }



    render () {
        return (
            <div className="search-area">
                <label htmlFor="search-field">Looking for</label>
                <input 
                id="search-field"
                type="text"
                className="form-control search-input"
                placeholder="start typing here..."
                onChange={this.onUpdateSearch}/>
            </div>
        )
    }
}

export default SearchPanel;
