export class CreateUserDto{
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly password: string;
    readonly birthDate: Date;
    readonly image: string;
}

export class LoginUserDto{
    readonly email: string;
    readonly password: string;
}