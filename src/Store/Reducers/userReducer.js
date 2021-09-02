const defaultState = {
    firstPlayer: true,
}

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            return {...state, firstPlayer: !state.firstPlayer}
        case "SET_WINNER":
            return {...state, winner: action.winner}
        case "SET_PLAYERS":
            return {...state, player1: action.player1, player2: action.player2}
        default:
            return state
    }
}