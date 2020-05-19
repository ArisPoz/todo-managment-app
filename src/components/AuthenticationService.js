class AuthenticationService {
    registerSuccesfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserAuthenticated() {
        let authenticatedUser = sessionStorage.getItem('authenticatedUser')

        if(authenticatedUser === null) return false
        return true
    }
}

export default new AuthenticationService()