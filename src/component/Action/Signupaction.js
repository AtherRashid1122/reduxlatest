export const Signupaction = (data) => {
    console.log("data is ", data)

    return {

        type: 'SIGN_UP',
        Signupdata: data
    }
}