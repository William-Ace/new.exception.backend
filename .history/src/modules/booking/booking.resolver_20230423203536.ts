import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { CurrentUser } from '../../userDecorator/user.decorator';

@Resolver((of) => Booking)
export class BookingResolver {
  constructor(private readonly bookingService: BookingService) {}

  @Query((returns) => [Booking], { name: 'bookings', nullable: false })
  async getBookings(@CurrentUser() user) {
    return this.bookingService.findAll(user.email);
  }
}
