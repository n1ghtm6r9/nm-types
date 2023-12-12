import { Field } from '@nmxjs/validation';

export class EntityDto {
  @Field({
    type: String,
  })
  id: string;

  @Field({
    type: Number,
  })
  createdAt: number;

  @Field({
    type: Number,
  })
  updatedAt: number;
}
