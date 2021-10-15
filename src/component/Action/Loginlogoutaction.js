export const setdata = (data) => {
    // console.log("data", data)

    return ({
        type: "SET_USER",
        data: data
    })
}

export const Logout = (data) => {
    return ({
        type: "LOG_OUT"
    })
}


export const Submitdata = (data) => {

    console.log("submit data is ", data)
    return ({
        type: 'SUBMIT',
        submitdata: data
    })
}