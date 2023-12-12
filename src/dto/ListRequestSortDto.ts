import { Field } from '@nmxjs/validation';
import { SortOrderByEnum } from '../interfaces';

export abstract class ListRequestSortDto {
  @Field({
    type: String,
  })
  field: string;

  @Field({
    type: { SortOrderByEnum },
    enum: true,
  })
  type: SortOrderByEnum;
}
