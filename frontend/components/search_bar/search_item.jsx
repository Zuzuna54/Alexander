import { withRouter } from "react-router-dom";
import React from "react";

const SearchItem = (props) => {
    
    let { result } = props;
    return (result.none === "404") ? (
        <div className="search-item">
            <div className="not-found-container">
            <p className="not-found-text">No results found.</p>
            </div>
        </div>
    ) : (
            <div className="search-item" onClick={() => {
                props.clearQuery();
                props.history.push(`/profile/${result.id}`);
            }}>

                {/* <img src={result.profilePhoto} className="searched-photo" /> */}
                <p>{result.username}</p>
            </div>
        );
};

export default withRouter(SearchItem); 