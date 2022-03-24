import React from "react";

const Card = ({name, username, id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?set=set2`} alt="img"></img>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
        </div>
    );
}

export default Card;