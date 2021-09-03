import './App.css';
import FieldList from "./Components/FieldList/FieldList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import Winner from "./Components/Pop-up/Winner/Winner";
import Start from "./Components/Pop-up/Start/Start";
import Stats from "./Components/Stats/Stats";

function App() {
    const winner = useSelector(state => state.user.winner)

    const [startModalWindow, setStartModalWindow] = useState(true)
    const [winnerModalActive, setWinnerModalActive] = useState(false)

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
            <Stats/>
        </>
    );
}

export default App;
