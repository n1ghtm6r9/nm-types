import { Field } from '@nmxjs/validation';

export abstract class GetOneRequestDto<T extends object = object> {
  @Field({
    type: String,
  })
  id: string;

  @Field({
    type: String,
    array: true,
    nullable: true,
    withoutGraphQl: true,
  })
  select?: Array<keyof T>;

  @Field({
    type: Boolean,
    nullable: true,
    withoutGraphQl: true,
  })
  reject?: boolean;
}
