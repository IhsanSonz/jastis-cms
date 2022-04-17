import { call, put } from "redux-saga/effects";
import { setUserDetail } from "../../ducks/userDetail";
import { requestGetUserDetail } from "../requests/userDetail";

export function* handleGetUserDetail(action) {
    try {
        console.log("Sending request");
        console.log(action.id);
        const response = yield call(requestGetUserDetail, {id: action.id});
        console.log(response);
        const { data } = response;
        console.log(data.message);
        yield put(setUserDetail(data.data));
    } catch (error) {
        console.error(error);
    }
}