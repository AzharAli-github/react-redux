import { buy_book } from "./ActionType"
const initialState = {
    NumberofBooks : 20
}

const BookReducer = (state = initialState, action) => {
    switch(action.type){
        case buy_book:
            return{
                ...state, NumberofBooks: state.initialState-1
            }
        default:
            return state
    }
}

export default BookReducer;