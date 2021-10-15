export const Apidata = (data) => {
    console.log("Action api data is ", data)
    return {
        type: 'API_DATA',
        data: data
    }
}

export const Delete = (data) => {
    console.log("Action api id is ", data)
    return {
        type: 'DELETE_DATA',
        data: data
    }
}
export const Updatedata = (id) => {
    // console.log("update id is ", id)
    return {
        type: 'UPDATE_DATA',
        data: id
    }
}