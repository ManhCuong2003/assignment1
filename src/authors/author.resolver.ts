import { Query, Resolver } from '@nestjs/graphql';
import { AuthorModel } from './author.model';
import { AuthorsService } from './authors.service';

@Resolver(() => AuthorModel)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorsService) {}

  @Query(() => [AuthorModel])
  authors() {
    return this.authorService.findAll();
  }
}
