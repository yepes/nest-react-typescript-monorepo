import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Contact, sharedFunction, User } from '@monorepo/common';
import { validateOrReject } from 'class-validator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getContacto() {
    // contact is a class decorated using class-validator in common
    const contact = new Contact();
    contact.subject = 'a completely fine';
    contact.email = 'memail.com';

    let errors = [];
    try {
      await validateOrReject(contact);
    } catch (e) {
      errors = e;
    }

    // n is a random helper function exported from common
    const number = sharedFunction(4815162342);

    // user is an interface exported from common
    const user: User = {
      email: 'asd',
      firstName: 'asd',
      lastName: 'asd',
      profilePic: 'asdasd',
    };

    const hello = this.appService.getHello();

    return {
      contact,
      errors,
      number,
      user,
      hello,
    };
  }
}
