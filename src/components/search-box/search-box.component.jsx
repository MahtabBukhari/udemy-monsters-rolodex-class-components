import React, { Component } from 'react';
import './search-box.styles.css'

class SearchBox extends Component {
    render() {
        const {onEventHandler,className,placeholder} = this.props;
        return (
            <div>
            <input type="search" className={`search-box ${className}`} placeholder={placeholder} onChange={onEventHandler} />
            </div>
        );
    }
}

export default SearchBox;