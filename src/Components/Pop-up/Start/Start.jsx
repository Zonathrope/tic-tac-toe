import React, {useState} from 'react';
import Modal from "../../../UI/Modal/Modal";
import {useDispatch} from "react-redux";

const Start = ({startModalWindow, setStartModalWindow}) => {
    const dispatch = useDispatch()
    const [players, setPlayers] = useState({player1: '', player2: ''})

    function assignPlayers(e) {
        e.preventDefault()
        dispatch({type: "SET_PLAYERS", players})
        setStartModalWindow(false)
    }

    return (
        <Modal active={startModalWindow} setActive={setStartModalWindow}>
            <p> Player 1:
                <input
                    type="text"
                    value={players.player1}
                    onChange={e => setPlayers({...players, player1: e.target.value})}
                />
            </p>
            <p> Player 2:
                <input
                    type="text"
                    value={players.player2}
                    onChange={e => setPlayers({...players, player2: e.target.value})}
                />
            </p>
            <button onClick={assignPlayers}>submit</button>
        </Modal>
    );
};

export default Start;