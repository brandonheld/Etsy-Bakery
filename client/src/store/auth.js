import Cookies from 'js-cookie';

const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';
const SIGN_UP = "SIGN_UP"

const setUser = user => {
    return {
        type: SET_USER,
        user
    };
};
const newUser = user => {
    return {
        type: SIGN_UP,
        user
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER
    };
};

export const login = (username, password) => {

    return async dispatch => {
        const res = await fetch('/api/session', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({username, password}),
        });
        res.data = await res.json();
        if(res.ok) dispatch(setUser(res.data.user));
        return res;
    };
};

export const logout = () => {
    return async dispatch => {
        const res = await fetch('/api/session', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        },
        });
        res.data = await res.json();
        if (res.ok) dispatch(removeUser());
        return res;
    };
};

export const signUp = (username, password, email) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
        },
        body: JSON.stringify({ username, email, password })
        })
        res.data = await res.json();
        if(res.ok) dispatch(newUser(res.data.user))
        return res;
    }
}

window.login = login;

export default function authReducer(state={}, action) {
    switch (action.type) {
        case SET_USER || SIGN_UP: 
            return action.user;
        case REMOVE_USER:
            return {}; 
        default:
            return state;
    }
}