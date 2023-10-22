import * as Interfaces from '../interfaces/user';

export class User implements Interfaces.User {
    public constructor() {

        this.id = '';
        this.carrierId = '';
        this.userType = '';
        this.roleIds = [];
        this.friendlyName = '';
        this.active = false;
        this.sendalArm = false;
        this.sendInvoice = false;
        this.sendRateChange = false;
        this.userName = '';
        this.emailVerified = false;
        this.phoneVerified = false;
    }

    public id: string;
    public ownerId?: string;
    public resellerId?: string;
    public carrierId: string;
    public accountId?: string;
    public ipstategy?: string;
    public userType: string;
    public userKind?: string;
    public provider?: string;
    public roleIds: [];
    public lastUpdatedBy?: string;
    public lastupdatedDate?: string;
    public dateAdded?: string;
    public friendlyName: string;
    public active: boolean;
    public iplIsTs?: string;
    public birthday?: string;
    public providerId?: string;
    public imageurl?: string;
    public email?: string;
    public expireDate?: string;
    public firstName?: string;
    public lang?: string;
    public lastName?: string;
    public middleName?: string;
    public mobilePhone?: string;
    public msn?: string;
    public name?: string;
    public companyName?: string;
    public brandName?: string;
    public officePhone?: string;
    public otHeRims?: string;
    public phone?: string;
    public position?: string;
    public sendalArm: boolean;
    public sendInvoice: boolean;
    public sendRateChange: boolean;
    public skyPe?: string;
    public timeOffset?: string;
    public zipCode?: string;
    public userName: string;
    public address?: string;
    public emailVerified: boolean;
    public phoneVerified: boolean;
}
