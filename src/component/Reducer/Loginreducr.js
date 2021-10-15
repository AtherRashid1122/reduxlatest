



// const intialstate = {

//     counter: 0
// }

// export const Loginreducer = (state = intialstate, action) => {

//     switch (action.type) {

//         case 'INCREAMENT': {

//             return { counter: state.counter + 1 }

//         }

//         case 'DECREAMENT': {

//             return { counter: state.counter - 1 }
//         }
//         default: return state
//     }

// }







const intialstate = {

    counter: 0,
    counterdata: [],
    login: []
}

export const Loginreducer = (state = intialstate, action) => {
    console.log("counter detail id", action.payload)
    switch (action.type) {

        case 'INCREAMENT': {
            return {
                ...state,
                counter: state.counter + 1,
                counterdata: [...state.counterdata, action.counterdetail]
            }

        }

        case 'DECREAMENT': {

            return { counter: state.counter - 1 }
        }

        case 'DELETE':

            return {
                ...state, counterdata: state.counterdata.filter((item, index) => index !== action.deleteid),
                counter: state.counter - 1

            }

        case 'CART_LOGIN':
            return {
                ...state,
                login: [...state.login, action.payload]

            }
        default: return state
    }

}