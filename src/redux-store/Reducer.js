
let initialState = {
    arrProducts: [],
    arrTeachers: [],
    
}


const Reducer = (state = initialState, action) => {

    if (action.type === "addTeacherS")
{
    return ( {
        ...state,
        arrTeachers:[...state.arrTeachers, action.payload]
    })
}


if (action.type === "addProductsS")
{
    return ( {
        ...state,
        arrProducts:[...state.arrProducts, action.payload]
    })
}

    console.log(action);
    return state
}


export default Reducer