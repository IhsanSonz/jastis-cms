const GET_LOADING = 'GET_LOADING';
const SET_LOADING = 'SET_LOADING';

export const getLoading = () => ({
    type: GET_LOADING
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
})

const initialState = {
    loading: false
}

const loadingReducer = (state = initialState, { type, payload }) => {
    console.log("Loading reducer");
    console.log(`type: ${type}`);
    switch (type) {

        case SET_LOADING:
            console.log("Setting up loading");
            console.log(payload);
            return { ...state, loading: payload }

        default:
            return state
    }
}

export default loadingReducer;