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