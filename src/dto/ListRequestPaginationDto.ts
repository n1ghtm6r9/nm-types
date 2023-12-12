import { Field } from '@nmxjs/validation';

export abstract class ListRequestPaginationDto {
  @Field({
    type: Number,
  })
  page: number = 1;

  @Field({
    type: Number,
  })
  limit: number = 100;
}
