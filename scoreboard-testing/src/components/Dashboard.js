import React from "react";

const Dashboard = (props) => {

    const foulLogic = () => {
        if (props.strikes >= 2) {
            return props.strikes
        } else {
            return props.strikes + 1
        }
    }

    const strikeLogic = () => {
        if (props.strikes >= 2) {
            return (props.setStrikes(0), props.setBalls(0))
        } else {
            return props.strikes + 1
        }
    }

    const ballLogic = () => {
        if (props.balls >= 3) {
            return (props.setBalls(0), props.setStrikes(0))
        } else {
            return props.balls + 1
        }
    }

    return (
        <div>
        <input onClick={() => props.setStrikes(strikeLogic)} type="submit" value="Strike"/>
        <input onClick={() => props.setBalls(ballLogic)} type="submit" value="Ball"/>
        <input onClick={() => {props.setStrikes(foulLogic())
        }} type="submit" value="Foul"/>
        <input onClick={() => {
            props.setStrikes(0) 
            props.setBalls(0)}} type="submit" value="Hit"/>
        </div>
    )
}

export default Dashboard;