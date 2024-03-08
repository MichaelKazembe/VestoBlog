//auth.js
const TOKEN_KEY = 'token';

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isLoggedIn = () => {
    return localStorage.getItem(TOKEN_KEY) !== null;
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUserInfo = () => {
    const token = getToken();
    if (!token) {
        return null;
    }

    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const userInfo = JSON.parse(atob(base64));
        return userInfo;
    } catch (error) {
        return null;
    }
};
