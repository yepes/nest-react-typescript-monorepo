import {Length} from "class-validator";

export class Phone {

    @Length(3)
    prefix: string = '';

    @Length(9, 11)
    number: string = "";
}
