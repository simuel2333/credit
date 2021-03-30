export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToken = (token) => {
    localStorage.setItem('token', token);
}

export const clearToken = () => {
    localStorage.removeItem('token');
}

export const isLogined = () => {
    if(localStorage.getItem('token')) {
        return true;
    }
    return false;
}

export const whoLogined = () => {
    if(localStorage.getItem('token')== null) {
        return "user";
    } else if(localStorage.getItem('token').startsWith("user")) {
        return "user";
    } else if(localStorage.getItem('token').startsWith("supervise")) {
        return "supervise";
    } else {
        return "institution";
    }
}