import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }
    private users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
    ];

    getAllUsers() {
        return this.prisma.user.findMany();
    }
    saveUsers(user: CreateUserDto) {
        return this.prisma.user.create({
            data: user
        });
    }
}
