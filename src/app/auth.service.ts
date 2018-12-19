// This service will check if user logged into system or not
export class AuthService {

    isLoggedIn = false;

    isAuth() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn);
            }, 1000);
        });
    } 

    logIn() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;  
    }
}