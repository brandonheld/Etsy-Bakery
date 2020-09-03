import { OPEN_SIGNIN } from '../components/Navbar';
import { OPEN_SIGNUP} from '../components/Login';


export default function uiReducer(state = {}, action) {
    switch (action.type) {
        case OPEN_SIGNUP:
            return {
                isOpenSignup: true,
                isOpenSignin: false
            }
        case OPEN_SIGNIN:
            return {
                isOpenSignup: false,
                isOpenSignin: true
            }
        default:
            return state;
    }
}