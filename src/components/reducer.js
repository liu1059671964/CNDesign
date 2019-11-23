// export const initialState = {
//     open: 0
// };
// export function reducer(state, action) {
//     switch (action.type) {
//         case "change":
//             return { open: !state.open };
//         default:
//             throw new Error();
//     }
// }

const defaultState = {
    open: false
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'change':
            return {
                open: action.open
            }
        default:
            return state
    }
}
