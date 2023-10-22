import * as Interfaces from '../interfaces/register';

export class Register implements Interfaces.Register {

    public constructor() {

        this.username = '';
        this.usernameValidation = [];
        this.EmailAddress = '';
        this.EmailAddressValidation = [];
        this.Password = '';
        this.PasswordValidation = [];
        this.ConfirmPrivacy = false;
        this.ConfirmPrivacyValidation = [];
    }

    public username: string;
    public usernameValidation: string[];
    public EmailAddress: string;
    public EmailAddressValidation: string[];
    public Password: string;
    public PasswordValidation: string[];
    public ConfirmPrivacy: boolean;
    public ConfirmPrivacyValidation: string[];

}