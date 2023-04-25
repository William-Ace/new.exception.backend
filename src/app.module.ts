import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalendarModule } from './calendar/calendar.module';
import { AuthModule } from './auth/auth.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://WilliamLimWork:thanksgoodness-1934@exception.b3t3ymr.mongodb.net/?retryWrites=true&w=majority'
    ),
    CalendarModule,
    AuthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
