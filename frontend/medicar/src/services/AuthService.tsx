import axios from "axios";

const API_URL = "http://localhost:3000"

class ClassAuthService {
    login(username: string, password: string, rememberPassword: boolean) {
        return axios
            .post(API_URL + "/users/login", {
                username,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("response", JSON.stringify(response.data)); 
                    if (rememberPassword) {
                        localStorage.setItem("password", password); 
                    }
                    else {
                        localStorage.removeItem("password"); 
                    }      
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("response");
        window.location.reload();
    }
    
    register(username: string, email: string, password: string) {
        return axios.post(API_URL + "/users", {
            username,
            email,
            password
          });
    }

    getCurrentUser() {
        const response = localStorage.getItem("response");
        if (response) return JSON.parse(response);

        return null;
    }
}

const AuthService = new ClassAuthService();
export default AuthService;