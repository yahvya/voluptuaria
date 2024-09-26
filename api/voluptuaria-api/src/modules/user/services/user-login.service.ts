import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserLoginDatas} from "../data-contracts/user-login.datas";
import {UserLoginResponse} from "../data-contracts/user-login-responses";
import { Repository } from "typeorm"
import {UserEntity} from "../../database-module/entities/user.entity";
import {InjectRepository} from "@nestjs/typeorm";
import { HashService } from "../../app-security/services/hash.service"

/**
 * @brief Login service
 */
@Injectable()
export class UserLoginService {
    constructor(
        protected readonly jwtService: JwtService,
        @InjectRepository(UserEntity)
        protected readonly userRepository:Repository<UserEntity>,
        protected readonly hashService: HashService
    ) {}

    /**
     * @brief try to log the user
     * @param options options
     * @returns {UserLoginResponse} login response
     */
    public async login(options: { userLoginDatas: UserLoginDatas }): Promise<UserLoginResponse> {
        const {email, password} = options.userLoginDatas;
        const user = await this.userRepository.findOneBy({email:email})
        const response = new UserLoginResponse()

        if (user === null) {
            response.errorMessage = 'error.unrecognized-email-password'
            return response
        }

        const passwordMatch = await this.hashService.compare({
            toCompare: user.password,
            hash: password
        })

        if (passwordMatch == false) {
            response.errorMessage = 'error.unrecognized-email-password'
            return response
        }

        const payload = {email : user.email, password: user.password}

        response.authenticationToken = this.generateToken(payload)
        return response;
    }

    generateToken(payload: any): string {
        return this.jwtService.sign(payload);
    }

    validateToken(token: string): any {
        try {
            return this.jwtService.verify(token);
        } catch (error) {
            return null;
        }
    }
}