import { Loginreducer } from "./Loginreducr";
import loginlogout from "./Lgnlgoreducer";
import { Apireducer } from "./Apidatareducer";
import { combineReducers } from "redux";
import { Regitrationreducer } from "./Registrationreducer";
import Signupreducer from "./Signupreducer";
const rootreducer = combineReducers({
    Loginreducer,
    loginlogout,
    Apireducer,
    Regitrationreducer,
    Signupreducer


})

export default rootreducer;