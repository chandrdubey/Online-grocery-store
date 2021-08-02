const initState = {
    cart: [],
    check:1
};

const rootReducers = (state = initState, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':{
            const data = action.payload;
            return {
                ...state,
                cart : data,
            }
        }
        case 'REMOVE_FROM_CART':{
            const data = action.payload;
            return {
                ...state,
                cart : data,
            }
        }
        default : {
            return state
        }
    }
}                    

export default rootReducers;