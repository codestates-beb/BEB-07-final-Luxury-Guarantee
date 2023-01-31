import { 
    LOGIN_USER,
    SIGNUP_USER
} from '../_actions/types'

// eslint-disable-next-line import/no-anonymous-default-export

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    switch(action.tpye) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            
        case SIGNUP_USER:
            return { ...state, register: action.payload}
           
        default:
            return state;
    }
}