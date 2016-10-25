import { UPDATE, SETDATA } from './actionTypes';

export function updateActionCreator() {
    return {
        type: UPDATE
    }
}

export function setdataActionCreator(payload) {
    return {
        type: SETDATA,
        payload
    }
}
