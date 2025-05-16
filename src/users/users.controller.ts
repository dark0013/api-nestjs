import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from "./users.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from './dto/create-user.dto';
@Controller('/users')
@ApiTags("users")
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    saveUsers(@Body() user: CreateUserDto) {
        return this.usersService.saveUsers(user);
    }

}
