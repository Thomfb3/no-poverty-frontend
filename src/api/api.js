import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1"

class NoPovertyApi {
    // the token for interactive with the API will be stored here.
    static token;

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        //there are multiple ways to pass an authorization token, this is how you pass it in the header.
        //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${NoPovertyApi.token}` };
        const params = (method === "get") ? data : {};

        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        };
    };


    ///////Auth API
    /** Get token for login from username and password */
    static async login(data) {
        let res = await this.request("auth/token", data, "post");
        return res.token;
    };

    /** Signup for site */
    static async signup(data) {
        let res = await this.request("auth/register", data, "post");
        return res.token;
    };

    /////USERS
    /** Get the current user. */
    static async getCurrentUser(id) {
        let res = await this.request(`users/${id}`);
        return res.data;
    };
    /** Save user profile */
    static async saveProfile(userId, data) {
        let res = await this.request(`users/${userId}`, data, "patch");
        return res.data;
    };

}


export default NoPovertyApi;