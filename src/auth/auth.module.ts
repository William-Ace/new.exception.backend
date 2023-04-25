import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Auth, AuthSchema } from './auth.model';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
  ],
  controllers: [],
  exports: [AuthService],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
