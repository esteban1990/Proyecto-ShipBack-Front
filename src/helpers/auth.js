const Auth = {
    isAuthenticated: false,
    authenticated(){
        this.isAuthenticated = true;
        console.log(this.isAuthenticated)
    },
    signOut(){
        this.isAuthenticated = false;
    },
    getAuth(){
        return this.isAuthenticated
    }
}

export default Auth;