import React from 'react';
import {useSelector} from "react-redux";
import "./Stats.css"

const Stats = () => {
    const player1 = useSelector(state => state.user.player1)
    const player2 = useSelector(state => state.user.player2)
    return (
        <div className="stats">
            <p>Score</p>
            {/*TODO: add players score dynamically*/}
            <p>{player1}: 0</p>
            <p>{player2}: 0</p>
        </div>
    );
};

export default Stats;