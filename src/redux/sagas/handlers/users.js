import { call, put } from "redux-saga/effects";
import { setAllUsers } from "../../ducks/users";
import { requestGetAllUsers } from "../requests/users";

export function* handleGetAllUsers(action) {
    try {
        console.log("Sending request");
        const response = yield call(requestGetAllUsers);
        console.log(response);
        const { data } = response;
        console.log(data.message);
        yield put(setAllUsers(data.data));
    } catch (error) {
        console.error(error);
    }
}