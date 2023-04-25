import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Resource } from './schemas/resource.schema';
import { Event } from './schemas/event.schema';

@Injectable()
export class CalendarService {
  constructor(
    @InjectModel(Resource.name) private readonly resourceModel: Model<Resource>,
    @InjectModel(Resource.name) private readonly eventModel: Model<Event>
  ) {}

  async readResources(): Promise<Resource[]> {
    return await this.resourceModel.find({}).exec();
  }
  async readEvents(): Promise<Event[]> {
    return await this.eventModel.find({}).exec();
  }
}
