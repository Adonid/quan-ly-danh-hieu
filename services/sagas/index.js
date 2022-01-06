import { fork, all } from "@redux-saga/core/effects"
import auth from './auth'
import common from './common'

export default function* rootSaga() {
    yield all([
        fork(auth),
        fork(common),
    ])
}