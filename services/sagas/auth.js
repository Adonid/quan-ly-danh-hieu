import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
//   alertWarning,
//   alertInfo,
    alertFailure,
    logged,
} from '../actions'
import { uriPage, LOGIN } from '../constans'
import {
    loginApi,
} from 'apis/Auth'


// Dang ky tai khoan
function* loginSaga({payload}) {
  try {
      // goi API loginApi
      const delta = yield call(loginApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Danh dau da dang nhap va tu dong chuyen qua trang dashboard
        yield put(logged(data.datas.token, data.datas.myself, data.datas.wins))
        yield delay(1000)
        // Ve trang dashboard
        yield window.location.replace(uriPage.home)
        // Show thong bao thanh cong tren DASHBOARD
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}



function* rootSaga() {
  yield all([
    takeLatest(LOGIN, loginSaga),
  ])
}

export default rootSaga