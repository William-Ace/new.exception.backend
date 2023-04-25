import { Controller, Get, HttpException } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get('read')
  async read(): Promise<HttpException | object> {
    const events = await this.calendarService.readEvents();
    const resources = await this.calendarService.readResources();

    return {
      success: true,
      resources: {
        rows: resources,
      },
      events: {
        rows: events,
      },
    };
  }
}
