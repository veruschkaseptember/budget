// Reducer is simply a function that takes in the old state and action and returns a new state. (takes in two parameters - old state and action)

const contextReducer = (state, action) =>  {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);

            return transactions;
            case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            return transactions;
        default:
            return state;
    }

}

export default contextReducer;