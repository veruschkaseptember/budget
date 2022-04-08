// Reducer is simply a function that takes in the old state and action and returns a new state. (takes in two parameters - old state and action)

const contextReducer = (state, action) =>  {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((transaction) => transaction.id !== action.payload);

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
            case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(transactions));

            return transactions;
        default:
            return state;
    }
};

export default contextReducer;