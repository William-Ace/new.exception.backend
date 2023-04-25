import { Auth, AuthDocument } from './auth.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private authModel: Model<AuthDocument>
  ) {}

  async register(
    email: string,
    password: string,
    name: string
  ): Promise<Auth | string> {
    const user = await this.authModel.findOne({ email });

    if (user !== null) return 'User already exists.';

    const newUser = await new this.authModel({
      email,
      password,
      name,
    });

    return newUser.save();
  }

  async findAll(email: string): Promise<Auth | string> {
    const user = await this.authModel.findOne({ email });

    if (user !== null) return 'User already exists.';

    const newUser = await new this.authModel({
      email,
      password,
      name,
    });

    return newUser.save();
  }
}
