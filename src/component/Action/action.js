// export const Increament = () => {
//     // console.log("iteemmmm", data)
//     return {
//         type: 'INCREAMENT',
//         // data: data
//     }
// }


// export const Decreament = (data) => {


//     return {
//         type: 'DECREAMENT',
//         // userdata: data,
//         // charityId: res.data.data.charity,
//     };

// }


export const Increament = (data) => {
    console.log("iteemmmm increament", data)
    return {
        type: 'INCREAMENT',
        counterdetail: data
    }
}


export const Decreament = (data) => {


    return {
        type: 'DECREAMENT',
        // userdata: data,
        // charityId: res.data.data.charity,
    };

}

export const Delete = (id) => {


    return {
        type: 'DELETE',
        deleteid: id,
        // charityId: res.data.data.charity,
    };

}

export const Logincartaction = (data) => {

    return {
        type: 'CART_LOGIN',
        payload: data
    }
}








