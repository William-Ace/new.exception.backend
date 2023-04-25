import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';

@Resolver((of) => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => String, { name: 'register', nullable: true })
  async register(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Args({ name: 'name', type: () => String }) name: string
  ) {
    return this.authService.register(email, password, name);
  }
}
