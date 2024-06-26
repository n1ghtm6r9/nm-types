import { Field } from '@nmxjs/validation';
import { FilterOperatorEnum } from '../interfaces';

export abstract class ListRequestFilterDto {
  @Field({
    type: String,
  })
  field: string;

  @Field({
    type: String,
  })
  value: string;

  @Field({
    type: { FilterOperatorEnum },
    enum: true,
  })
  operator: FilterOperatorEnum;

  @Field({
    type: Boolean,
    nullable: true,
  })
  not?: boolean;
}
