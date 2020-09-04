import { OPEN_SIGNIN } from '../components/Navbar';
import { OPEN_SIGNUP, CLOSE_MODAL} from '../components/Login';

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
        case CLOSE_MODAL:
            return {
                isOpenSignup: false,
                isOpenSignin: false
            }
        default:
            return state;
    }
}