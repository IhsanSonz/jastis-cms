import { takeLatest } from "redux-saga/effects";
import { GET_ALL_USERS } from "../ducks/users";
import { GET_USER_DETAIL } from "../ducks/userDetail";
import { handleGetAllUsers } from "./handlers/users";
import { handleGetUserDetail } from "./handlers/userDetail";

export function* watcherSaga() {
    console.log("Watching Saga");
    yield takeLatest(GET_ALL_USERS, handleGetAllUsers);
    yield takeLatest(GET_USER_DETAIL, handleGetUserDetail);
}