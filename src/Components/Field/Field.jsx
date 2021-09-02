import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Field.css'
import circle from '../../assets/Marks/circle.png'
import cross from '../../assets/Marks/cross.png'

import {checkWinner} from "../../Util/Util";

const Field = ({id}) => {
    const [userMark, setUserMark] = useState('')
    const dispatch = useDispatch()
    const firstPlayer = useSelector(state => state.user.firstPlayer)
    const board = useSelector(state => state.field.field)
    const player1 = useSelector(state => state.user.player1)
    const player2 = useSelector(state => state.user.player2)

    const changeFirstPlayer = () => {
        dispatch({type: "CHANGE_USER"})
    }

    const playerSign = (firstPlayer) => {
        if (firstPlayer) return "X"
        else return "O"
    }
    //return X or 0
    const isWinner = checkWinner(board)
    if (isWinner) {
        if(isWinner ==="X"){
            dispatch({type: "SET_WINNER", winner: player1})
        }
        else{
            dispatch({type: "SET_WINNER", winner: player2})
        }
    }

    const placeMark = () => {
        if (userMark !== '') return
        if (firstPlayer) {
            setUserMark(cross)
        } else {
            setUserMark(circle)
        }
        changeFirstPlayer()
        dispatch({type: "SET_MARK", userMark: playerSign(firstPlayer), number: id})
    }

    return (
        <div onClick={placeMark}>
            <img src={userMark} alt={'circle'}/>
        </div>
    );
};

export default Field;