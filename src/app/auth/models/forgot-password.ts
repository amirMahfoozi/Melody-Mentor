import * as Interfaces from '../interfaces/forgot-password';

export class ForgotPassword implements Interfaces.ForgotPassword {

    public constructor() {

        this.EmailAddress = '';
        this.ValidationMessage = [];

    }

    public EmailAddress: string;
    public ValidationMessage: string[];

}