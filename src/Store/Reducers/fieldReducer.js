const defaultState = {
    field: {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: '',
        7: '',
        8: '',
        9: ''
    }
}

export const fieldReducer = (state = defaultState, {type, userMark, number}) => {
    const newMark = {}
    newMark[number] = userMark

    switch (type){
        case "SET_MARK":
            return {...state, field: {...state.field, ...newMark}}
        default:
            return state
    }
}