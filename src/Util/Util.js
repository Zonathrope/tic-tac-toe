const possibleWins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

export function checkWinner(field) {
    const empty = ''
    for (let row = 0; row < possibleWins.length; row++) {
        //Decompose row into variables
        const [a, b, c] = possibleWins[row]

        //Check if any of the var is empty
        const isAnyEmpty = field[a] === empty ||
            field[b] === empty ||
            field[c] === empty

        if (!isAnyEmpty) {
            //If all symbols are equivalent return that symbol
            const isAllMatches = field[a] === field[b] &&
                field[a] === field[c] &&
                field[b] === field[c]

            if (isAllMatches) {
                return field[a]
            }
        }
    }
}
