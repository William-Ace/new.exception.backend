import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalendarModule } from './calendar/calendar.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://WilliamLimWork:thanksgoodness-1934@exception.b3t3ymr.mongodb.net/?retryWrites=true&w=majority'
    ),
    CalendarModule,
  ],
})
export class AppModule {}
