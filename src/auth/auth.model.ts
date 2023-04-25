import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Auth {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop({ required: true })
  name: string;

  @Field(() => String)
  @Prop({ required: true })
  email: string;

  @Field(() => String)
  @Prop({ required: true })
  password: string;
}

export type AuthDocument = Auth & Document;

export const AuthSchema = SchemaFactory.createForClass(Auth);
