import React from "react";

export const Display = (props) => {

    return (
        <div>
        <p>Strikes: {props.strikes}</p>
        <p>Balls: {props.balls}</p>
        </div>
    )
}