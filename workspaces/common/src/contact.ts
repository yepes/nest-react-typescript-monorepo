import {IsEmail, Length, ValidateNested} from "class-validator";
import {Phone} from "./phone";

export class Contact {
    @Length(10, 20)
    subject: string;


    @IsEmail({}, {
        message: 'Not a valid email'
    })
    email?: string;

    @ValidateNested()
    phones: Phone[]

}
