

const instialstate = {
    user: [],
    isloggedin: true,
    logindata: []
}

const loginlogout = (state = instialstate, action) => {
    // console.log("login data is ", state.logindata)
    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.data,
                isloggedin: true
            }
        case 'LOG_OUT':
            return {
                ...state,
                user: {},
                isloggedin: false
            }
        case 'SUBMIT':
            return {
                ...state,
                logindata: [...state.logindata, action.submitdata]
            }


        default: return state
    }
}
export default loginlogout;