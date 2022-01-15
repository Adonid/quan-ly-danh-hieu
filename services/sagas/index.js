import { fork, all } from "@redux-saga/core/effects"
import action from './action'
import auth from './auth'

export default function* rootSaga() {
    yield all([
        fork(action),
        fork(auth)
    ])
}