import { Field } from '@nmxjs/validation';

export abstract class ListResponseCursorDto {
  @Field({
    type: Number,
  })
  totalCount: number;

  @Field({
    type: Number,
  })
  totalPages: number;

  @Field({
    type: Number,
    nullable: true,
  })
  nextPage?: number;
}
