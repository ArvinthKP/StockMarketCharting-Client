export class User {
    id: number;
    username: String;
    password: String;
    email: String;
    userType: String;
    mobile: String;

    constructor(username, password, email, userType, mobile,id?) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.userType = userType;
        this.mobile = mobile;
        this.id = id;
    }
}