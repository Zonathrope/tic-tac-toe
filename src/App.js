import './App.css';
import FieldList from "./Components/FieldList/FieldList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Winner from "./Components/Pop-up/Winner/Winner";
import Start from "./Components/Pop-up/Start/Start";

function App() {
    const winner = useSelector(state => state.user.winner)

    const [startModalWindow, setStartModalWindow] = useState(true)
    const [winnerModalActive, setWinnerModalActive] = useState(false)

    console.log(winner)
    useEffect(() => {
        if (winner) {
            setWinnerModalActive((prev => !prev))
        }
    }, [winner])


    return (
        <>
            <Start  startModalWindow={startModalWindow} setStartModalWindow={setStartModalWindow}/>
            <Winner winner={winner} winnerModalWindow={winnerModalActive} setWinnerModalActive={setWinnerModalActive}/>
            <FieldList/>

        </>
    );
}

export default App;
