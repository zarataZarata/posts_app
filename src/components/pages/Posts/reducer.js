const initialState = {
    name: 'POSTS',
    dataPosts: [],
};

export default function (state = initialState, action) {
    console.log(action);
    if (action.type === 'SET_POSTS') {
        return {
            ...state,
            dataPosts: action.dataPosts
        }
    }
    return state
};