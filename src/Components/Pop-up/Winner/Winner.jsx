import React from 'react';
import Modal from "../../../UI/Modal/Modal";

const Winner = ({winner, winnerModalActive, setWinnerModalActive}) => {
    return (
        <Modal active={winnerModalActive} setActive={setWinnerModalActive}>
            Player {winner} is winner!
            <p>
                <button>restart</button>
            </p>
        </Modal>
    );
};

export default Winner;