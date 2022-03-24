import React from "react";

const SearchBox = ({searchChanged}) => {
    return (
        <div>
            <input 
            type='search' 
            placeholder="search robots" 
            className=" br3 pa3 ba b--green bg-light-blue"
            onChange={searchChanged}
            ></input>
        </div>
    );
}

export default SearchBox;