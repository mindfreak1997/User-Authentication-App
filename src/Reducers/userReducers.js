

const userInitialState = {
    isLogin: false

}

const userReducers = (state = userInitialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return { ...state, isLogin: action.payload }
        }
        default: {
            return { ...state }
        }
    }
}

export default userReducers