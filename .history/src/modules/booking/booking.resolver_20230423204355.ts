import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { CurrentUser } from '../../userDecorator/user.decorator';

@Resolver((of) => Object)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Query((returns) => Object, { name: 'bookings', nullable: false })
  async getBookings(@CurrentUser() user) {
    return {
      success: true,
      resources: {
        rows: [
          {
            id: 'bryntum',
            name: 'Bryntum team',
            eventColor: 'blue',
          },
          {
            id: 'hotel',
            name: 'Hotel Park',
            eventColor: 'orange',
          },
          {
            id: 'michael',
            name: 'Michael Johnson',
            eventColor: 'deep-orange',
          },
        ],
      },
      events: {
        rows: [
          {
            id: 1,
            startDate: '2022-03-11T14:00:00',
            endDate: '2022-03-18T12:00:00',
            name: 'Hackathon',
            allDay: true,
            resourceId: 'bryntum',
            eventColor: 'green',
          },
          {
            id: 2,
            startDate: '2022-03-11T14:00:00',
            endDate: '2022-03-11T18:00:00',
            name: 'Check-In in Hotel',
            resourceId: 'hotel',
          },
          {
            id: 3,
            startDate: '2022-03-11T18:00:00',
            endDate: '2022-03-11T20:00:00',
            name: 'Relax and official arrival beer',
            allDay: true,
            resourceId: 'michael',
          },
          {
            id: 4,
            startDate: '2022-03-11T20:00:00',
            endDate: '2022-03-11T21:00:00',
            name: 'Dinner',
            resourceId: 'hotel',
          },
          {
            id: 5,
            startDate: '2022-03-12T09:00:00',
            endDate: '2022-03-12T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 6,
            startDate: '2022-03-12T10:00:00',
            endDate: '2022-03-12T12:00:00',
            name: 'Team Scrum',
            resourceId: 'bryntum',
          },
          {
            id: 7,
            startDate: '2022-03-12T12:00:00',
            endDate: '2022-03-12T14:00:00',
            name: 'Scheduler Grid introduction + review',
            resourceId: 'bryntum',
          },
          {
            id: 8,
            startDate: '2022-03-12T14:00:00',
            endDate: '2022-03-12T15:00:00',
            name: 'Lunch',
            resourceId: 'hotel',
          },
          {
            id: 9,
            startDate: '2022-03-12T15:00:00',
            endDate: '2022-03-12T19:00:00',
            name: 'Active client project review',
            resourceId: 'bryntum',
          },
          {
            id: 10,
            startDate: '2022-03-12T19:00:00',
            endDate: '2022-03-12T20:00:00',
            name: 'Dinner',
            resourceId: 'hotel',
          },
          {
            id: 11,
            startDate: '2022-03-13T09:00:00',
            endDate: '2022-03-13T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 12,
            startDate: '2022-03-13T10:00:00',
            endDate: '2022-03-13T12:00:00',
            name: 'Roadmapping for 2020',
            resourceId: 'bryntum',
          },
          {
            id: 13,
            startDate: '2022-03-13T12:00:00',
            endDate: '2022-03-13T14:00:00',
            name: 'Review Assembla tickets and decide features to add',
            resourceId: 'bryntum',
          },
          {
            id: 14,
            startDate: '2022-03-13T14:00:00',
            endDate: '2022-03-13T15:00:00',
            name: 'Lunch',
            resourceId: 'hotel',
          },
          {
            id: 15,
            startDate: '2022-03-13T15:00:00',
            endDate: '2022-03-13T19:00:00',
            name: 'Active programming',
            resourceId: 'bryntum',
          },
          {
            id: 16,
            startDate: '2022-03-13T19:00:00',
            endDate: '2022-03-13T20:00:00',
            name: 'Dinner',
            resourceId: 'hotel',
          },
          {
            id: 17,
            startDate: '2022-03-14T09:00:00',
            endDate: '2022-03-14T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 18,
            startDate: '2022-03-14T10:00:00',
            endDate: '2022-03-14T18:00:00',
            name: 'Excursion',
            resourceId: 'michael',
          },
          {
            id: 19,
            startDate: '2022-03-14T18:00:00',
            endDate: '2022-03-14T22:00:00',
            name: 'Team Building',
            resourceId: 'michael',
            eventColor: 'green',
          },
          {
            id: 20,
            startDate: '2022-03-15T09:00:00',
            endDate: '2022-03-15T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 21,
            startDate: '2022-03-15T14:00:00',
            endDate: '2022-03-15T15:00:00',
            name: 'Lunch',
            resourceId: 'hotel',
          },
          {
            id: 22,
            startDate: '2022-03-15T19:00:00',
            endDate: '2022-03-15T20:00:00',
            name: 'Dinner',
            resourceId: 'hotel',
          },
          {
            id: 23,
            startDate: '2022-03-15T00:00:00',
            endDate: '2022-03-16T00:00:00',
            name: 'Gantt review + development',
            allDay: true,
            resourceId: 'bryntum',
          },
          {
            id: 24,
            startDate: '2022-03-16T09:00:00',
            endDate: '2022-03-16T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 25,
            startDate: '2022-03-16T14:00:00',
            endDate: '2022-03-16T15:00:00',
            name: 'Lunch',
            resourceId: 'hotel',
          },
          {
            id: 26,
            startDate: '2022-03-16T18:00:00',
            endDate: '2022-03-16T21:00:00',
            name: 'Split.JS conference: Monitoring and Reproducing Errors in Web Applications + Late Dinner or AfterParty',
            resourceId: 'michael',
          },
          {
            id: 27,
            startDate: '2022-03-16T00:00:00',
            endDate: '2022-03-17T00:00:00',
            name: 'Root Cause ticket bash',
            allDay: true,
            resourceId: 'bryntum',
          },
          {
            id: 28,
            startDate: '2022-03-17T09:00:00',
            endDate: '2022-03-17T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 29,
            startDate: '2022-03-17T14:00:00',
            endDate: '2022-03-17T15:00:00',
            name: 'Lunch',
            resourceId: 'hotel',
          },
          {
            id: 30,
            startDate: '2022-03-17T19:00:00',
            endDate: '2022-03-17T20:00:00',
            name: 'Dinner',
            resourceId: 'hotel',
          },
          {
            id: 31,
            startDate: '2022-03-17T00:00:00',
            endDate: '2022-03-18T00:00:00',
            name: 'Pair programming sessions',
            allDay: true,
            resourceId: 'bryntum',
          },
          {
            id: 32,
            startDate: '2022-03-18T09:00:00',
            endDate: '2022-03-18T10:00:00',
            name: 'Breakfast',
            resourceId: 'hotel',
          },
          {
            id: 33,
            startDate: '2022-03-18T10:00:00',
            endDate: '2022-03-18T12:00:00',
            name: 'Check-Out & Fly home',
            resourceId: 'michael',
          },
        ],
      },
    };
  }

  @Mutation((returns) => Booking, { name: 'new_booking', nullable: true })
  async newBooking(
    @Args({ name: 'bookingTitle', type: () => String }) title: string,
    @Args({ name: 'startDate', type: () => String }) start: string,
    @Args({ name: 'endDate', type: () => String }) end: string,
    @CurrentUser() user
  ) {
    return this.bookingService.newBooking(
      title,
      start,
      end,
      user.name,
      user.email
    );
  }

  @Mutation((returns) => Booking, { name: 'update_booking', nullable: true })
  async updateBooking(
    @Args({ name: 'booking_id', type: () => String }) booking_id: string,
    @Args({ name: 'start', type: () => String }) start: string,
    @Args({ name: 'end', type: () => String }) end: string,
    @Args({ name: 'title', type: () => String }) title: string,
    @CurrentUser() user
  ) {
    return this.bookingService.updateBooking(
      booking_id,
      start,
      end,
      title,
      user.email
    );
  }

  @Mutation((returns) => Booking, { name: 'delete_booking', nullable: true })
  async deleteBooking(
    @Args({ name: 'booking_id', type: () => String }) booking_id: string,
    @CurrentUser() user
  ) {
    return this.bookingService.deleteBooking(booking_id, user.email);
  }
}