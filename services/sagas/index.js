import { fork, all } from "@redux-saga/core/effects"
import action from './action'

export default function* rootSaga() {
    yield all([
        fork(action),
    ])
}