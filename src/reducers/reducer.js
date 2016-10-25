import {combineReducer} from 'redux';

const initialState = {
    lists : [],
    select: {
        id: 0,
        title: '',
        thumbnail: '',
        source: ''
    }
};

export function app(state = initialState, action) {
    switch (actin.type) {
        case UPDATE:
            return Object.assign({}, state, {
                lists: action.payload
            })
            break;
        case SETDATA:
            return Object.assign({}, state, {
                select: {
                    id: action.id,
                    title: action.title,
                    thumbnail: action.thumbnail,
                    source: action.source
                }
            })
        default:
        return state;
    }
}
