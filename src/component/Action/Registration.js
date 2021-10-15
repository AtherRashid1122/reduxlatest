export const Registration = (data) => {

    console.log("data is ", data)
    return {
        type: 'SUBMIT',
        payload: data
    }

}

export const Deleteaction = (id) => {

    console.log("delete id is ", id)
    return {
        type: 'DELETEID',
        id: id
    }
}



export const Updateddata = (id) => {
    // console.log("update id is ", id)
    return {
        type: 'UPDATEDID',
        data: id
    }
}