const initialState = []

const noteReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'NOTES': {
            return [...state, action.payload]
        }
        case 'GET_ALL': {
            return [...state, ...action.payload]
        }
        case 'REMOVE': {
            return state.filter(ele => {
                return ele._id !== action.payload
            })
        }
        case 'EDIT': {
            return state.map(ele => {
                if (ele.id === action.payload._id) {
                    return { ...action.payload }
                } else {
                    return { ...ele }
                }
            })
        }
        default: {
            return [...state]
        }
    }
}
export default noteReducers