import * as Interfaces from '../interfaces/login';

export class Login implements Interfaces.Login {

    public constructor() {

        this.username = '';
        this.password = '';

    }

    public username: string;
    public password: string;

}