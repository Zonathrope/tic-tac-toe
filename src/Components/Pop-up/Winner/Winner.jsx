import React from 'react';
import Modal from "../../../UI/Modal/Modal";
import {useSelector} from "react-redux";

const Winner = () => {
    const winner = useSelector(state => state.user.winner)

    return (
        <Modal active={!!winner}>
            Player {winner} is winner!
            <p>
                <button>restart</button>
            </p>
        </Modal>
    );
};

export default Winner;