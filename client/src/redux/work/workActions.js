export const getWork =(data)=>({
    type: "GET_WORK",
    payload: data
})

export const getErrors =(error,status)=>({
    type: "GET_ERROR",
    payload: {error,status}
})