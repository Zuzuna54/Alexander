import React from "react";
import SearchItem from "./search_item"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTarget: ""
        }
        this.debouncedSearch = this.debounce(this.handleSearch, 500);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.clearQuery = this.clearQuery.bind(this);
    }

    debounce(func, timeout) {
        let debounced;
        let context = this;
        return function () {
            if (debounced) clearTimeout(debounced);
            debounced = setTimeout(() => func.apply(context, arguments), timeout);
        };
    }

    handleUpdate(e) {
        this.setState(
            { searchStr: e.target.value },
            () => this.debouncedSearch(this.state.searchStr));
        // e.target.parentElement.children[2].src = '/images/load.gif';
    }

    handleSearch(query) {
        let loader = document.getElementById("search").children[2];
        // loader.src = "/images/cancel.png";
        let results = document.getElementsByClassName('search-results')[0];
        if (query !== '') {
            this.props.searchUsers(query)
                .then(() => {
                    if (results) { results.classList.remove('clear-search'); }
                });
        } else {
            if (results && !results.classList.contains('clear-search')) {
                results.classList.add('clear-search');
            }
        }
    }

    clearQuery() {
        this.setState({ searchStr: '' });
    }

    renderSearchResult() {
        let { searchResults } = this.props;
        searchResults = Object.values(searchResults);

        if (this.state.searchStr !== '') {
            return (searchResults.length === 0) ? (
                <div className="search-results clear-search">
                </div>
            ) : (
                    <div className="search-results clear-search">
                        {searchResults.map((r, idx) =>
                            <SearchItem
                                result={r}
                                key={idx}
                                clearQuery={this.clearQuery} />
                        )}
                    </div>
                );
        }
    }

    render() {
        return (
            <div className="search-field" id="search">
                <i className="fas fa-search"></i>
                <input type="text"
                    placeholder="Search"
                    value={this.state.searchStr}
                    onChange={this.handleUpdate} />
                <img className="cancel-button" src={window.cancel} onClick={this.clearQuery} />
                {this.renderSearchResult()}
            </div>
        );
    }
}

export default SearchBar; 