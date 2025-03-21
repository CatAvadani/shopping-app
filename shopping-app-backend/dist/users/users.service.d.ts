import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserRequest } from './dto/create-user.request';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(data: CreateUserRequest): Promise<{
        email: string;
        id: number;
    }>;
    getUser(filter: Prisma.UserWhereUniqueInput): Promise<{
        email: string;
        password: string;
        id: number;
    }>;
}
