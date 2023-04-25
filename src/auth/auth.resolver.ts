import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { Auth } from './auth.model';
import { AuthService } from './auth.service';

@Resolver((of) => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((returns) => [Auth], { name: 'helloExpection', nullable: false })
  async findAll(@Args({ name: 'email', type: () => String }) email: string) {
    return this.authService.findAll(email);
  }

  @Mutation((returns) => [Auth], { name: 'register', nullable: false })
  async register(
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'password', type: () => String }) password: string,
    @Args({ name: 'name', type: () => String }) name: string
  ) {
    console.log('I am here!');
    return this.authService.register(email, password, name);
  }
}
