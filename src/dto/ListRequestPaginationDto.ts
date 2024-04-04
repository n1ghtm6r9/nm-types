import { Field } from '@nmxjs/validation';
import { paginationLimit } from '@nmxjs/constants';

export abstract class ListRequestPaginationDto {
  @Field({
    type: Number,
    default: 1,
  })
  page: number = 1;

  @Field({
    type: Number,
    default: paginationLimit,
  })
  limit: number = paginationLimit;
}
