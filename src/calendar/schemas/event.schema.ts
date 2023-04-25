import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  allDay: boolean;

  @Prop({ required: true })
  resourceId: string;

  @Prop({ required: true })
  eventColor: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
