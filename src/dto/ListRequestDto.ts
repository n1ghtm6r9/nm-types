import { Field } from '@nmxjs/validation';
import { ListRequestPaginationDto } from './ListRequestPaginationDto';
import { ListRequestFilterDto } from './ListRequestFilterDto';
import { ListRequestSortDto } from './ListRequestSortDto';

export abstract class ListRequestDto<T extends object = object> {
  @Field({
    type: ListRequestFilterDto,
    array: true,
    nullable: true,
  })
  filters?: ListRequestFilterDto[];

  @Field({
    type: ListRequestSortDto,
    array: true,
    nullable: true,
  })
  sorts?: ListRequestSortDto[];

  @Field({
    type: ListRequestPaginationDto,
    nullable: true,
  })
  pagination?: ListRequestPaginationDto;

  @Field({
    type: String,
    array: true,
    nullable: true,
    withoutGraphQl: true,
  })
  select?: Array<keyof T>;
}
