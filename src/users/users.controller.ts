import { Controller, Get } from '@nestjs/common';
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";
@Controller('/users')
@ApiTags("users")
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

}
