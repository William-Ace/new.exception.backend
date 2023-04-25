import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Booking {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  name: string;

  @Field(() => String)
  @Prop({ required: true })
  resource: string;

  @Field(() => String)
  @Prop({ required: true })
  start: string;

  @Field(() => String)
  @Prop({ required: true })
  end: string;
}

export type BookingDocument = Booking & Document;

export const BookingSchema = SchemaFactory.createForClass(Booking);
