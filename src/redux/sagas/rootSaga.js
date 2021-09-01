import { takeLatest } from "redux-saga/effects";
import { GET_ALL_USERS } from "../ducks/users";
import { handleGetAllUsers } from "./handlers/users";

export function* watcherSaga() {
    console.log("Watching Saga");
    yield takeLatest(GET_ALL_USERS, handleGetAllUsers);
}