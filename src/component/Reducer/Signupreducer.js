const initialstate = {
    Signup: []
}

const Signupreducer = (state = initialstate, action) => {

    switch (action.type) {

        case 'SIGN_UP':

            return {
                ...state,
                Signup: [...state.Signup, action.Signupdata]
            }

        default: return state
    }

}

export default Signupreducer;