import { Field } from '@nmxjs/validation';
import { ListRequestPaginationDto } from './ListRequestPaginationDto';
import { ListRequestFilterDto } from './ListRequestFilterDto';
import { ListRequestSortDto } from './ListRequestSortDto';

export abstract class ListRequestDto {
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
  })
  pagination: ListRequestPaginationDto;
}
