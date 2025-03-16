import { TokenPayload } from 'src/auth/token-payload.interface';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(request: CreateUserRequest): Promise<{
        email: string;
        id: number;
    }>;
    getMe(user: TokenPayload): TokenPayload;
}
