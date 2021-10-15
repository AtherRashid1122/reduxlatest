const initialstate = {
    user: []
}

export const Apireducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'API_DATA':
            return {
                ...state,
                user: action.data
            }
        case 'DELETE_DATA':
            return { ...state, user: state.user.filter((item, index) => index !== action.data) }
        // return { ...state, user: state.user.slice(action.data) }


        case 'UPDATE_DATA':
            return {

                user: action.data

            }


        default: return state
    }
}

