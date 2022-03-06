import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name, schema: UserSchema
            }
        ]),
        JwtModule.register({
            secret: 'Developer123@',
            signOptions: {
                expiresIn: '30d'
            }
        })
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService,
        JwtStrategy
    ]
})
export class UserModule { }
