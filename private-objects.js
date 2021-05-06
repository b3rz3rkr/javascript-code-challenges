//Private Fields solution
class PrivateObjects {
    #username;
    #password;

    constructor(user) {
        this.#username = user.username;
        this.#password = user.password;
        this.age = user.age;
    }
}

{
    const user = {
        username: 'someName',
        password: 'passw0rd',
        age: 35
    };
    const privateUser = new PrivateObjects(user);
    console.log(privateUser);
    console.log(privateUser.username);
    console.log(privateUser.password);
}

//Symbols solution

{
    const
        username = Symbol('username'),
        password = Symbol('password');

    const user = {
        [username]: 'otherName',
        [password]: 'p@ssw0rd',
        age: 33
    }

    console.log(user)
    console.log(user.username)
    console.log(user.password)
}