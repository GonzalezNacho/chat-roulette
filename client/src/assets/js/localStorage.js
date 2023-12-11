export const loginToStorage = ({user, isLogin}) => {
    window.localStorage.setItem('user', user)
    window.localStorage.setItem('isLogin', isLogin)
}

export const logoutToStorage = () => {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('isLogin')
}