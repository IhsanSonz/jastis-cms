export const GET_USER_DETAIL = 'GET_USER_DETAIL';
export const SET_USER_DETAIL = 'SET_USER_DETAIL';

export const getUserDetail = (id) => ({
    type: GET_USER_DETAIL,
    id
})

export const setUserDetail = (payload) => ({
    type: SET_USER_DETAIL,
    payload
})

const initialState = {
    user_detail: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_USER_DETAIL:
        return { ...state, user_detail: payload }

    default:
        return state
    }
}
