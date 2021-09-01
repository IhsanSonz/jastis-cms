export const GET_ALL_USERS = 'GET_ALL_USERS';
export const SET_ALL_USERS = 'SET_ALL_USERS';

export const getAllUsers = () => ({
    type: GET_ALL_USERS
})

export const setAllUsers = (payload) => ({
    type: SET_ALL_USERS,
    payload
})

const initialState = {
    users: []
}

const usersReducer = (state = initialState, { type, payload }) => {
    console.log("Users reducer");
    console.log(type);
    switch (type) {

        case SET_ALL_USERS:
            console.log("Setting all users");
            console.log(payload);
            return { ...state, users: payload }

        default:
            return state
    }
}

export default usersReducer;