
const initialstate = {
    user: []
}

export const Regitrationreducer = (state = initialstate, action) => {



    switch (action.type) {

        case 'SUBMIT':
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        case 'DELETEID':

            return { ...state, user: state.user.filter((item, index) => index !== action.id) }

        case 'UPDATEDID':
            return {

                user: action.data

            }
        default: return state
    }
}