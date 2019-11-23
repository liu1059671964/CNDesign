export const changeOpen = (open) => {
    return (dispatch) => {
        dispatch({
            type: 'change',
            open: !open
        })

    }
}