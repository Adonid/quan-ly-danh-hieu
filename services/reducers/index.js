import loginReducer from "./loginReducer"
import commonReducer from "./commonReducer"
import dashboardReducers from "./dashboardReducers"

export default {
    common: commonReducer,
    login: loginReducer,
    dashboard: dashboardReducers,
}