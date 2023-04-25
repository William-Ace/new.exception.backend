import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Data {
  @Field(() => String)
  @Prop({ required: true })
  str: string;
}

export type DataDocument = Data & Document;

export const DataSchema = SchemaFactory.createForClass(Data);
